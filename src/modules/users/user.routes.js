import { Router } from "express";
import { validate, Joi } from "express-validation";

import * as userController from "./user.controllers";
import userValidations from "./user.validations";
import { passwordReg } from './user.validations';

const routes = new Router();

const userValidation = {
  body: Joi.object({
    email: Joi.string().email().required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    userName: Joi.string().required(),
    password: Joi.string().regex(passwordReg).required(),
  }),
};

routes.post("/signup", userController.signUp);

export default routes;
