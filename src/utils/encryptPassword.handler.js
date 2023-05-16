//import bcryptjs to encrypt password
import bcryptjs from "bcryptjs";

/**
 * Pasar contraseña sin encriptar: pass.123
 * @param {*} passwordPlain
 * @returns
 */
export const encrypt = async (passwordPlain) => {
  //encrypts the password plain text to hash
  const hash = await bcryptjs.hash(passwordPlain, 8);
  return hash;
};

/**
 * Pasar contraseña sin encriptar y contraseña encriptada
 * @param {*} passwordPlain
 * @param {*} passwordHash
 * @returns
 */
export const compare = async (passwordPlain, passwordHash) => {
  // compares the password in plain text and the password hash
  return await bcryptjs.compare(passwordPlain, passwordHash);
};
