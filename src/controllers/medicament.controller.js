// import medicaments services
import {
  getAllMedicaments,
  getOneMedicament,
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

    res.status(200).json({ data: response });
  } catch (error) {}
};
