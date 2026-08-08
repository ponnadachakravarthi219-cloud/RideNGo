import express from "express";

import {
  addVehicle,
  getVehicles,
  getVehicleById,
} from "../controllers/vehicleController.js";

const router = express.Router();

router.post("/", addVehicle);

router.get("/", getVehicles);

router.get("/:id", getVehicleById);

export default router;