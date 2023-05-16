import { Router } from "express";
// import medicaents controller
import {
  getMedicaments,
  getMedicament,
  createMedicament,
  updateMedicament,
  deleteMedicament,
} from "../controllers/medicament.controller.js";

//create router
const router = Router();

router
  .get("/medicaments", getMedicaments)
  .get("/medicaments/:id", getMedicament)
  .post("/medicaments", createMedicament)
  .put("/medicaments/:id", updateMedicament)
  .delete("/medicaments/:id", deleteMedicament);

export default router;
