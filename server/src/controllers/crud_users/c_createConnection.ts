import {Request, Response} from 'express';
import knex from '../../database/connection';

export default class connectionsController {
 
  // Listagem do total de conexões realizadas;
  async  index(req: Request, res: Response) {
    const totalConnections = await knex('connections').count('* as total');
    const { total } = totalConnections[0];
    return res.json({total});
  };

 // Criar conexão entre usuários;
 async  create(req: Request, res: Response) {
    const {user_id} = req.body;
    await knex('connections').insert({ 
      user_id,
    });
    return res.status(201).send();
  };
}