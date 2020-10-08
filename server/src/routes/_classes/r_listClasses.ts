import { Router } from 'express';
import { checkJwt } from '../../middlewares/checkJwt';

import ClassesController from '../../controllers/crud_classes/c_listClasses';
const classesController = new ClassesController();

const classesRouters = Router();

classesRouters.get('/list_classes', classesController.index);

export default classesRouters;