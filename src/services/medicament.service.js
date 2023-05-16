// import medicament Model
import MedicamentModel from "../models/medicament.model.js";

/**
 * Devuelve listado de registros en la DB
 * @returns
 */
export const getAllMedicaments = async () => {
  const responseGet = await MedicamentModel.findAll();
  return responseGet;
};

/**
 * id de registro a buscar
 * @param {*} id
 * @returns
 */
export const getOneMedicament = async (id) => {
  const responseGet = await MedicamentModel.findOne({ where: { id } });
  return responseGet;
};

/**
 * datos del registro que se agregará a la DB
 * @param {*} medicament
 * @returns
 */
export const createNewMedicament = async (medicament) => {
  const responseCreate = await MedicamentModel.create(medicament);
  return responseCreate;
};

/**
 * datos del registro modificado y id del registro que se quiere actualizar
 * @param {*} medicament
 * @param {*} id
 * @returns
 */
export const updateOneMedicament = async (medicament, id) => {
  const responseUpdate = await MedicamentModel.update(medicament, {
    where: { id },
  });
  return responseUpdate;
};

/**
 * id del registro que se quiere elminar
 * @param {*} id
 * @returns
 */
export const deleteOneMedicament = async (id) => {
  const responseDelete = MedicamentModel.destroy({ where: { id } });
  return responseDelete;
};
