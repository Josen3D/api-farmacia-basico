// import medicaments services
import {
  getAllMedicaments,
  getOneMedicament,
  createNewMedicament,
  updateOneMedicament,
  deleteOneMedicament,
} from "../services/medicament.service.js";

// import matched data from express validator
import { matchedData } from "express-validator";
// import Http Error
import { handleHttpError } from "../utils/httpError.handler.js";

/**
 * Devuelve listado de registros en la DB
 * @param {*} req
 * @param {*} res
 */
export const getMedicaments = async (req, res) => {
  try {
    const response = await getAllMedicaments();
    res.status(200).json({ data: response });
  } catch (error) {
    handleHttpError(res, "ERROR_GET_MEDICAMENT " + error);
  }
};

/**
 * Devuelve un registro de la DB
 * @param {*} req
 * @param {*} res
 * @returns
 */
export const getMedicament = async (req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;
    const response = await getOneMedicament(id);

    if (!response) {
      handleHttpError(res, "MEDICAMENT_NOT_FOUND", 404);
      return;
    }

    res.status(200).json(response);
  } catch (error) {
    handleHttpError(res, "ERROR_GET_MEDICAMENTS " + error);
  }
};

/**
 * Crea un nuevo registro en la DB
 * @param {*} req
 * @param {*} res
 */
export const createMedicament = async (req, res) => {
  try {
    // saves only the clean data that corresponds to the validation done
    const body = matchedData(req);
    const response = await createNewMedicament(body);
    res.status(201).json({ data: response });
  } catch (error) {
    handleHttpError(res, "ERROR_CREATE_MEDICAMENT " + error);
  }
};

/**
 * Actualiza un registro de la DB
 * @param {*} req
 * @param {*} res
 * @returns
 */
export const updateMedicament = async (req, res) => {
  try {
    // saves only the clean data that corresponds to the validation done
    const { id, ...body } = matchedData(req); //save the id in an array, and the other data in other array
    const response = await updateOneMedicament(body, id);

    if (response <= 0) {
      handleHttpError(res, "MEDICAMENT_NOT_FOUND", 404);
      return;
    }
    const medicament = await getOneMedicament(id);

    res.status(200).json({ data: medicament });
  } catch (error) {
    handleHttpError(res, "MEDICAMENT_NOT_FOUND " + error);
  }
};

/**
 * Elimina un registro de la DB
 * @param {*} req
 * @param {*} res
 * @returns
 */
export const deleteMedicament = async (req, res) => {
  try {
    // saves only the clean data that corresponds to the validation done
    req = matchedData(req);
    const { id } = req;
    const response = await deleteOneMedicament(id);

    if (response <= 0) {
      handleHttpError(res, "MEDICAMENT_NOT_FOUND", 404);
      return;
    }
    res.status(200).json({ Message: "Medicament deleted" });
  } catch (error) {
    handleHttpError(res, "MEDICAMENT_NOT_FOUND " + error);
  }
};
