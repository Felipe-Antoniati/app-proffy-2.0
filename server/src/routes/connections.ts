import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';

import ConnectionsController from '../controllers/connectionsController';
const connectionsController = new ConnectionsController();

const routes = Router();

routes
  .post('/connections', celebrate({
    [Segments.BODY]: Joi.object().keys({
      user_id: Joi.string().required(),
    })
  }), connectionsController.create)

  .get('/connections', connectionsController.read)

export default routes;
