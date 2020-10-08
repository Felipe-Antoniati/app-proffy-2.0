import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import { checkJwt } from '../../middlewares/checkJwt';

import ClassesController from '../../controllers/crud_classes/c_createClass';
const classesController = new ClassesController();

const classesRouters = Router();

classesRouters.post('/classes', checkJwt, celebrate({
  [Segments.BODY]: Joi.object().keys({
    whatsapp: Joi.string().required(),
    bio: Joi.string().required(),
    subject: Joi.string().required(),
    cost: Joi.string().required(),
    schedule: Joi.array().items({
      week_day: Joi.number().required(),
      from: Joi.string().required(),
      to: Joi.string().required()  
    }),
  })
}), classesController.create);

export default classesRouters;