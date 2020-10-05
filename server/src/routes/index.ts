import { Router } from "express";

import auth from './auth';
import users from './users';
import classes from './classes';
import connections from './connections';

const routes = Router();

routes.use("/auth", auth);
routes.use("/user", users);
routes.use("/connections", connections);
routes.use("/classes", classes);

export default routes;