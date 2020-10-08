import { Router } from 'express';

import routeToRegisterUser from '../routes/_users/r_createUsers';

import routeToCreateClass from '../routes/_classes/r_createClass';
import routeToListClasses from '../routes/_classes/r_listClasses';

import routeToLogin from '../routes/_sessions/r_loginAuth';
import routeToRecoveryPwd from '../routes/_sessions/r_forgotPwd';
import routeToResetPwd from '../routes/_sessions/r_resetPwd';

const routes = Router();

routes
  // CRUD - Users
  .use('/users', routeToRegisterUser)
  // CRUD - Classes
  .use('/auth', routeToCreateClass)
  .use('/auth', routeToListClasses)
  // CRUD - sessions
  .use('/auth', routeToLogin)
  .use('/', routeToRecoveryPwd)
  .use('/', routeToResetPwd)
;

export default routes;