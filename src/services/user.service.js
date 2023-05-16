import UserModel from "../models/user.model.js";

/**
 * Pasar usuario a regiatrar
 * @param {*} user
 * @returns
 */
export const registerUser = async (user) => {
  try {
    const responseRegister = await UserModel.create(user);
    return responseRegister;
  } catch (error) {
    console.log("Error: " + error);
  }
};

/**
 * Pasar email del usuario que quiere hacer login
 * @param {*} email
 * @returns
 */
export const loginUSer = async (email) => {
  const responseLogin = await UserModel.findOne({ where: { email } });
  return responseLogin;
};
