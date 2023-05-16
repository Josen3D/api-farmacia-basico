// import check from express validator
import { check } from "express-validator";
// import validateResult from ../utils
import { validateResult } from "../utils/validator.handler.js";

//create validators for createMedicament
export const validatorRegister = [
  check("name").exists().notEmpty().isLength({ min: 3, max: 50 }),
  check("email").exists().notEmpty().isEmail(),
  check("password").exists().notEmpty().isLength({ min: 3, max: 15 }),

  // validates the results of data
  (req, res, next) => {
    return validateResult(req, res, next);
  },
];

//create validators for getMedicament
export const validatorLogin = [
  check("email").exists().notEmpty().isEmail(),
  check("password").exists().notEmpty().isLength({ min: 3, max: 15 }),

  // validates the results of data
  (req, res, next) => {
    return validateResult(req, res, next);
  },
];
