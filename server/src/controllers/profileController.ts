import {Request, Response} from 'express';
import connectionToDatabase from '../database/connection';

class profileController {

  async index(req: Request, res: Response) {
    const id = req.headers.authorization;

    const trx = await connectionToDatabase.transaction();

    try {
      const user = await trx('users')
      .where('id', id)
      .select('*');
      
      await trx.commit();
      return res.json(user);
          
    } catch (err) {
      await trx.rollback();
      console.log(err);
      return res.status(400).json({ 
        error: 'Unexpected error on logon'
      });
    };
  };

};

export default profileController;