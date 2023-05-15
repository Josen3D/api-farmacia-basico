// import medicament Model
import MedicamentModel from "../models/medicament.js";

/**
 * Devuelve listado de registros en la DB
 * @returns
 */
export const getAllMedicaments = async () => {
  const responseGet = await MedicamentModel.findAll();
  return responseGet;
};

/**
 * Devuelve un registro de la DB
 * id de registro a buscar
 * @param {*} id 
 * @returns 
 */
export const getOneMedicament = async (id) => {
  const responseGet = await MedicamentModel.findOne({ where: { id } });
  return responseGet;
};
