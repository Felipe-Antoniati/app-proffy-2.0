import {Request, Response} from 'express';
import crypto from 'crypto';
import connectionToDataBase from '../database/connection';

import convertHourToMinutes from '../utils/convertHoursToMinutes';

interface ScheduleItem {
  week_day: number,
  from: string,
  to: string
};

interface PageProps {
  page: number;
}

// CRUD users
export default class usersController {

  async  create(req: Request, res: Response) {
    const {
      firstname, lastname, email, password
    } = req.body;

    const id = crypto.randomBytes(4).toString('hex');

    const trx = await connectionToDataBase.transaction();

    try {
      await trx('users').insert({ 
          id, firstname, lastname, email, password
      });

      await trx.commit();
  
      return res.status(201).json({
        succes: 'Created Succesfully',
      });    

    } catch (err) {
      await trx.rollback();
      
      console.log(err);
      
      return res.status(400).json({
        error: 
          'Unexpected error while creating new User!',
      });
    };
  };

  async read(req: Request, res: Response) {
    const trx = await connectionToDataBase.transaction();

    try {
      const { page  } = req.query
      const [count] = await trx('users').count();
      
      const users = await trx('users')
        .limit(5)
        .offset((<any>page - 1) * 5)
        .select('*')
      ;
      
      res.header('X-Total-Count', <any>count['count(*)'])
      
      return res.json({
        UsersList: users,
      });
      
    } catch (err) {
      await trx.rollback();

      console.log(err);

      return res.status(400).json({ 
        error: 'Unexpected errp while List Users!',
      });
    };
  };

  async update(req: Request, res: Response) {
    const {
      firstname, lastname, email, password,
      whatsapp, bio, subject, cost, 
      schedule
    } = req.body;
    
    const id = req.headers.authorization;

    const trx = await connectionToDataBase.transaction();

    try {

      // ID Verification
      const user = await trx('users')
        .where('password', password)
        .select('id')
        .first()
      ;

      if(user.id !== id) {
        return res.status(401).json({
          error: 
            'Operation Unauthorized!',
        });
      };
      // Finish ID Verification

      // Password Verification
      const userPassword = await trx('users')
        .where('password', password)
        .select('password')
        .first()
      ;

      if(userPassword.password !== password) {
        return res.status(401).json({
          error: 
            'Operation Unauthorized! Password Invalid',
        });
      };
      // Finish Password Verification

      await trx('users').update({
        firstname, lastname, email, password
      });
  
      const foreignKeyClass = await trx('users').select('id');
      const user_id = foreignKeyClass;
  
      await trx('classes').update({
        whatsapp, bio, subject, cost, user_id
      });

      const foreignKeySchedule = await trx('classes').select('id');
      const class_id = foreignKeySchedule;
  
      const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
        return {
          week_day: scheduleItem.week_day,
          from: convertHourToMinutes(scheduleItem.from),
          to: convertHourToMinutes(scheduleItem.to),
          class_id,
        };
      });
  
      await trx('class_schedule').update(classSchedule);
      await trx.commit();
  
      return res.status(201).json({
        succes: 'Update Succesfully',
      });    

    } catch (err) {
      await trx.rollback();

      console.log(err);

      return res.status(400).json({
        error: 
        'Unexpected error while updating User!',
      });
    };
  };

  async delete(req: Request, res: Response) {
    const { password } = req.body;
    const id = req.headers.authorization;

    const trx = await connectionToDataBase.transaction();
    
    try {
      // ID Verification
      const user = await trx('users')
        .where('password', password)
        .select('id')
        .first()
      ;

      if(user.id !== id) {
        return res.status(401).json({
          error: 
            'Operation Unauthorized!',
        });
      };
      // Finish ID Verification

      // Password Verification
      const userPassword = await trx('users')
        .where('password', password)
        .select('id')
        .first()
      ;

      if(userPassword.id !== id) {
        return res.status(401).json({
          error: 
            'Operation Unauthorized! Password Invalid',
        });
      };
      // Finish Password Verification

      await trx('users').where('id', id).delete();
      await trx.commit();

      return res.status(204).json({
        message: 
          'Successfully Deleted',
      });
      
    } catch (err) {
      await trx.rollback();

      console.log(err);

      return res.status(400).json({
        error: 
        'Unexpected error while Delete Class!'
      });
    };
  };
};
