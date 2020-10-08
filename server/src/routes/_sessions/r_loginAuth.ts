import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';

import LoginAuthorizationController from '../../controllers/crud_sessions/c_loginAuth';
const loginAuthorizationController = new LoginAuthorizationController();

const usersRouters = Router();

usersRouters.post('/login', celebrate({
  [Segments.BODY]: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  })
}), loginAuthorizationController.create);

export default usersRouters;