import { Router } from "express";
import * as verifiJwt from '../middlewares/verifyJwt';

import AuthController from '../controllers/authController';
const authController = new AuthController();

const router = Router();

//Login route
router.post("/login", authController.login);


export default router;