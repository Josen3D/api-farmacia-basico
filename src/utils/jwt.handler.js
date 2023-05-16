// import json wen token
import jwt from "jsonwebtoken";
// secret from env
const JWT_SECRET = process.env.JWT_SECRET;

/**
 * Pasar objeto usuario
 * @param {*} user
 */
export const tokenSign = async (user) => {
  //signs the token usin the password hash, id and role of user
  const sign = jwt.sign(
    // data to use in sign
    {
      id: user.id,
      role: user.role,
    },
    JWT_SECRET,
    {
      expiresIn: "2h",
    }
  );
  return sign;
};

/**
 * Pasar token de session
 * @param {*} tokenJwt
 * @returns
 */
export const verifyToken = async (tokenJwt) => {
  try {
    //verifies the session token to comprove if is correct
    return jwt.verify(tokenJwt, JWT_SECRET);
  } catch (error) {
    return null;
  }
};
