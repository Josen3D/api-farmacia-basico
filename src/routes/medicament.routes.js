import { Router } from "express";
// import medicaents controller
import {
  getMedicaments,
  getMedicament,
} from "../controllers/medicament.controller.js";

//create router
const router = Router();

router.get("/medicaments", getMedicaments);
router.get("/medicaments/:id", getMedicament);

export default router;
