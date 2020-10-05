import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';


import ClassesController from '../controllers/classesController';
const classesController = new ClassesController();

const routes = Router();

routes.post('/classes', celebrate({
  [Segments.BODY]: Joi.object().keys({
    whatsapp: Joi.string().required(),
    bio: Joi.string().required().max(300),
    subject: Joi.string().required().email(),
    cost: Joi.string().required().min(8).max(30)
  })
}), classesController.create);

routes.get('/classes', classesController.read);

routes.put('/classes/:id', celebrate({
  [Segments.BODY]: Joi.object().keys({
    whatsapp: Joi.string().required(),
    bio: Joi.string().required().max(300),
    subject: Joi.string().required().email(),
    cost: Joi.string().required().min(8).max(30)
  })
}), classesController.update);

routes.delete('/classes/:id', celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required(),
  })
}), classesController.delete);

export default routes;
