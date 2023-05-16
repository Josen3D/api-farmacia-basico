// import medicaments services
import {
  getAllMedicaments,
  getOneMedicament,
  createNewMedicament,
  updateOneMedicament,
  deleteOneMedicament,
} from "../services/medicament.service.js";

/**
 * Devuelve listado de registros en la DB
 * @param {*} req
 * @param {*} res
 */
export const getMedicaments = async (req, res) => {
  try {
    const response = await getAllMedicaments();
    res.status(200).json({ data: response });
  } catch (error) {}
};

/**
 * Devuelve un registro de la DB
 * @param {*} req
 * @param {*} res
 * @returns
 */
export const getMedicament = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await getOneMedicament(id);

    if (!response) {
      res.status(404).json({
        message: "medicament not found",
      });
      return;
    }

    res.status(200).json(response);
  } catch (error) {
    console.log("Error: " + error);
  }
};

/**
 * Crea un nuevo registro en la DB
 * @param {*} req
 * @param {*} res
 */
export const createMedicament = async (req, res) => {
  try {
    const { body } = req;
    const response = await createNewMedicament(body);

    res.status(201).json({ data: response });
  } catch (error) {
    console.log("Error: " + error);
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
    const { id } = req.params;
    const { body } = req;
    const response = await updateOneMedicament(body, id);

    if (response <= 0) {
      res.status(404).json({ message: "MEDICAMENT_NOT_FOUND" });
      return;
    }
    const medicament = await getOneMedicament(id);

    res.status(200).json({ data: medicament });
  } catch (error) {
    console.log("Error: " + error);
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
    const { id } = req.params;
    const response = await deleteOneMedicament(id);

    if (response <= 0) {
      res.status(404).json({ message: "MEDICAMENT_NOT_FOUND" });
      return;
    }
    res.status(200).json({ Message: "Medicament deleted" });
  } catch (error) {
    console.log("Error: " + error);
  }
};
