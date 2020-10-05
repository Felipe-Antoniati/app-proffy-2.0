import {Request, Response} from 'express';
import connectionToDataBase from '../database/connection';

require("dotenv-safe").config();
import jwt from 'jsonwebtoken';

class sessionController {

  async create(req: Request, res: Response) {
    const {email, password} = req.body

    const trx = await connectionToDataBase.transaction();

    try {
      const user = await trx('users')
      .where('password', password)
      .select('email','password')
      .first()
    ;     
      if(email === user.email && password === user.password){
        const id = await trx('users').select('id');
        var token = jwt.sign({ id }, <any>process.env.SECRET, {
          expiresIn: 300
        });
        return res.json({ 
          auth: true, token: token, message: 'Logon Successfully'
        });
      } 
        return res.status(400).json({ 
          message: 'Invalid Logon' 
      });

    } catch (err) {
      await trx.rollback();

      console.log(err);
      
      return res.status(400).json({
        message: 'Unexpected error while Logon'
      });
    };
  };
};

export default sessionController;
