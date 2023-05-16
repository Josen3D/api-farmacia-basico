// import matched data
import { matchedData } from "express-validator";
// import compare and encrypt password
import { compare, encrypt } from "../utils/encryptPassword.handler.js";
// import token sign
import { tokenSign } from "../utils/jwt.handler.js";
// import handle error
const { handleHttpError } = require("../utils/handleError");
// import user services
const { registerUser, loginUSer } = require("../services/user.service.js");

/**
 * Registra un usuario en la DB
 * @param {*} req
 * @param {*} res
 */
export const register = async (req, res) => {
  try {
    req = matchedData(req);
    const password = await encrypt(req.password);
    const body = { ...req, password };

    const responseUser = await registerUser(body); //create the user on DB
    responseUser.set("password", undefined, { strict: false }); // hide the password on the response

    const data = {
      token: await tokenSign(responseUser),
      user: responseUser,
    };
    res.status(201).json(data);
  } catch (error) {
    handleHttpError(res, "ERROR_REGISTER_USER " + error);
  }
};

export const login = async (req, res) => {
  try {
    req = matchedData(req);
    const user = loginUSer(req.email);

    //if user doesnt exist return the function
    if (!user) {
      handleHttpError(res, "USER_NOT_EXISTS", 404);
      return;
    }

    // saves the hash password from user on DB
    const hashPassword = user.get("password");
    //compare the password and the hash password and verify if it matches
    const check = await compare(req.password, hashPassword);

    if (!check) {
      handleHttpError(res, "PASSWORD_INVALID", 401);
      return;
    }

    //hide the password on the response
    user.set("password", undefined, { strict: false });
    const data = {
      token: await tokenSign(user),
      user,
    };
    res.status(200).json(data);
  } catch (error) {
    handleHttpError(res, "ERROR_REGISTER_USER " + error);
  }
};
