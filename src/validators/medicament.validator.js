// import check from express validator
import { check } from "express-validator";
// import validateResult from ../utils
import { validateResult } from "../utils/validator.handler.js";

//create validators for createMedicament
export const validatorCreateMedicament = [
  check("name").exists().notEmpty().isLength({ min: 3, max: 20 }),
  check("laboratory").exists().notEmpty().isLength({ min: 3, max: 20 }),
  check("price").exists().notEmpty().isNumeric(),
  check("quantity").exists().notEmpty().isNumeric(),

  // validates the results of data
  (req, res, next) => {
    return validateResult(req, res, next);
  },
];

//create validators for getMedicament
export const validatorGetMedicament = [
  check("id").exists().notEmpty(),

  // validates the results of data
  (req, res, next) => {
    return validateResult(req, res, next);
  },
];
