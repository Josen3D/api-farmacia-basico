import { Router } from "express";
// import validators for users
import {
  validatorRegister,
  validatorLogin,
} from "../validators/user.validator.js";

// import auth controller
import { register, login } from "../controllers/auth.controller.js";

// create the router
const router = Router();

router
  .post("/users/register", validatorRegister, register)
  .post("/users/login", validatorLogin, login);

// exports router
export default router;
