import {Request, Response} from 'express';
import connectionToDatabase from '../database/connection';

export default class ConnectionsController {

  async create(req: Request, res: Response) {
    const {user_id} = req.body;

    const trx = await connectionToDatabase.transaction();

    try {
      await trx('connections').insert({ 
        user_id,
      });
  
      await trx.commit();

      return res.status(201).json({
        message: 'Created Connection Successfully' 
      });
      
    } catch (err) {
      await trx.rollback();

      console.log(err);

      return res.status(400).json({
        error: 'Unexpected error while create connection'
      });
    };
  };
 
  async read(req: Request, res: Response) {

    const trx = await connectionToDatabase.transaction();

    try {
      const totalConnections = await trx('connections').count('* as total');
  
      const { total } = totalConnections[0];
      await trx.commit();

      return res.json({total});   

    } catch (err) {
      await trx.rollback();
      
      console.log(err);
      
      return res.status(400).json({
        error: 'Unexpected error while list total connections'
      });
    };
  };
}