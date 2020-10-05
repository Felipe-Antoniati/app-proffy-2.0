require("dotenv-safe").config();
import { Request, Response } from 'express';
import connectionToDataBase from '../database/connection';
import * as jwt from "jsonwebtoken";

class AuthController {
  async login (req: Request, res: Response) {
    
    const { email, password } = req.body;

    const trx = await connectionToDataBase.transaction();

    try {
    //Verificar se email e senha estão definidos
    if (!(email && password)) {
      res.status(400).send();
    }

    //Buscar ID do usuário na base de dados
    const id = await trx('users')
      .where({email})
      .select('id')
    ;

    // JWT, válido por 1 hora
    const token = jwt.sign({ id }, <any>process.env.SECRET, 
      { expiresIn: '1h' }
    );

    await trx.commit();

    //Enviar o JWT na resposta
    res.send(token);

    } catch (error) {
      await trx.rollback();
      res.status(401).send();
    }
  };
}

export default AuthController;