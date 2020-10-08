import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';

import UsersController from '../../controllers/crud_users/c_createUser';
const usercontroller = new UsersController();

const usersRouters = Router();

usersRouters.post('/register', celebrate({
  [Segments.BODY]: Joi.object().keys({
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  })
}), usercontroller.create);

export default usersRouters;