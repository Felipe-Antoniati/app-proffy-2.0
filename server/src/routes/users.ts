import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';

import UsersController from '../controllers/usersControllers';
const usersControllers = new UsersController();

const routes = Router();

routes.post('/users', celebrate({
  [Segments.BODY]: Joi.object().keys({
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8).max(30)
  })
}), usersControllers.create);

routes.get('/users', celebrate({
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number(),
  })
}), usersControllers.read);

routes.put('/users/:id', celebrate({
  [Segments.BODY]: Joi.object().keys({
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    email: Joi.string().required().email(),
  })
}), usersControllers.update);

routes.delete('/users/:id', usersControllers.delete);

export default routes;
