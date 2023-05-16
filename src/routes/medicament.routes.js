import { Router } from "express";
// import medicaents controller
import {
  getMedicaments,
  getMedicament,
  createMedicament,
  updateMedicament,
  deleteMedicament,
} from "../controllers/medicament.controller.js";

// import validators for Medicaments
import {
  validatorCreateMedicament,
  validatorGetMedicament,
} from "../validators/medicament.validator.js";

//create router
const router = Router();

router
  .get("/medicaments", getMedicaments)
  .get("/medicaments/:id", validatorGetMedicament, getMedicament)
  .post("/medicaments", validatorCreateMedicament, createMedicament)
  .put(
    "/medicaments/:id",
    validatorGetMedicament,
    validatorCreateMedicament,
    updateMedicament
  )
  .delete("/medicaments/:id", validatorGetMedicament, deleteMedicament);

export default router;
