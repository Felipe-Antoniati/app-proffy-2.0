import {Request, Response} from 'express';
import connectionToDataBase from '../../database/connection';
import convertHourToMinutes from '../../utils/convertHoursToMinutes';

// Tipagem do cronograma de aulas;
interface ScheduleItem {
  week_day: number,
  from: string,
  to: string
};

export default class createClass {

  async create(req: Request, res: Response) {
    // Requisição de dados para criação de aulas;
    const {
      whatsapp, bio,
      subject, cost,
      schedule
    } = req.body;

    // Aguardar as transações do banco de dados;
    const trx = await connectionToDataBase.transaction();

    try {
      // Chave estrangeira - Relacionamento entre users/classes;
      const user_id = await trx('users').select('id');

      // Inserir dados do usuário.
      await trx('users')
      .update({
        whatsapp, bio
      });

      // Inserir dados da aula;
      const insertedClassesId = await trx('classes')
      .insert({
        subject, cost, user_id
      });

      // Chave estrangeira - Relacionamento entre classes/class_schedule;
      const class_id = insertedClassesId[0];
  
      const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
        return {
          week_day: scheduleItem.week_day,
          from: convertHourToMinutes(scheduleItem.from),
          to: convertHourToMinutes(scheduleItem.to),
          class_id,
        };
      });
  
      // Inserir dados do cronograma de aulas;
      await trx('class_schedule').insert(classSchedule);
  
      // Comitar as alterações e enviar Mensagem de sucesso
      await trx.commit();
      return res.status(201).json({
        succes: "Created Succesfully"
      });    

    // Se der errado, desfazer alterações e enviar Mensagem de erro;  
    } catch (err) {
      await trx.rollback();
      console.log(err);
      return res.status(400).json({
        error: "Unexpected error while creating new class!"
      });
    };
  };
};