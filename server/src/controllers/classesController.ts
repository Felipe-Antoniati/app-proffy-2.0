import {Request, Response} from 'express';
import connectionToDatabase from '../database/connection';

import convertHourToMinutes from '../utils/convertHoursToMinutes';


interface ScheduleItem {
  week_day: number,
  from: string,
  to: string
};

// CRUD Classes
export default class ClassesController {

  async create(req: Request, res: Response) {
    const {
      whatsapp, bio, subject, cost,
      schedule
    } = req.body;

    const trx = await connectionToDatabase.transaction();

    try {
      const user_id = await trx('users').select('id');

      const insertedClassesId = await trx('classes').insert({
        whatsapp, bio, subject, cost, user_id
      });
  
      const class_id = insertedClassesId[0];
  
      const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
        return {
          week_day: scheduleItem.week_day,
          from: convertHourToMinutes(scheduleItem.from),
          to: convertHourToMinutes(scheduleItem.to),
          class_id,
        };
      });
  
      await trx('class_schedule').insert(classSchedule);
  
      await trx.commit();
  
      return res.status(201).json({
        succes: "Created Succesfully"
      });    

    } catch (err) {
      await trx.rollback();

      console.log(err);
      
      return res.status(400).json({
        error: "Unexpected error while creating new class!"
      });
    };

  };

  async read(req: Request, res: Response) {
    const filters = req.query;

    const trx = await connectionToDatabase.transaction();

    try {
      const week_day = filters.week_day as string;
      const subject = filters.subject as string;
      const time = filters.time as string;
  
      if(!filters.week_day || !filters.subject || !filters.time) {
        return res.status(400).json({
          error: 'Missing Filters to search'
        });
      }
  
      const timeInMinutes = convertHourToMinutes(filters.time as string);
  
      const listClasses = await trx('classes')
        .whereExists( function () {
          this.select('class_schedule.*')
          .from('class_schedule')
          .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
          .whereRaw('`class_schedule`.`week_day` = ??', [Number(week_day)])
          .whereRaw('`class_schedule`.`from` <= ??', [timeInMinutes])
          .whereRaw('`class_schedule`.`to` > ??', [timeInMinutes])
        })
        .where('classes.subject', '=', subject)
        .join('users', 'classes.user_id', '=', 'users.id') 
        .select(['classes.*', 'users.*'])
      ;   
  
      return res.status(201).json(listClasses);
    } catch (err) {
      await trx.rollback();

      console.log(err);
      
      return res.status(400).json({
        error: "Unexpected error while search class!"
      });
    };
  };

  async update(req: Request, res: Response) {
    const {whatsapp, bio, subject, cost, schedule} = req.body

    const { id } = req.params;
    const user_id = req.headers.authorization;

    const trx = await connectionToDatabase.transaction();

    try {
      
    // Verification Foreign Key
    const foreignKeyClass = await trx('classes')
      .where('id', id)
      .select('user_id')
      .first()
    ;

    if(foreignKeyClass.user_id !== user_id) {
      return res.status(401).json({
        error: "Operation Unauthorized!",
      });
    };
    // Finish Verification Foreign Key

    await trx('classes').where('id', id).update({
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
      error: "Unexpected error while updated new class!"
    });
    };
  };

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const user_id = req.headers.authorization;

    const trx = await connectionToDatabase.transaction();
    
    try {
      // Verification Foreign Key   
      const foreignKeyClass = await trx('classes')
        .where('id', id)
        .select('user_id')
        .first()
      ;
  
      if(foreignKeyClass.user_id !== user_id) {
        return res.status(401).json({
          error: "Operation Unauthorized!",
        });
      };
      // Finish Verification Foreign Key
  
      await trx('classes').where('id', id).delete();
      await trx.commit();
      
      return res.status(204).send();
      
    } catch (err) {
      await trx.rollback();

      console.log(err);
        
      return res.status(400).json({
        error: "Unexpected error while delete class!"
      });      
    }
  };
};
