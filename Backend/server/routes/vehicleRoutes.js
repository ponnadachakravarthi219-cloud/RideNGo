import express from "express";

import {
  addVehicle,
  getVehicles,
  getVehicleById,
  updateVehicle,
  deleteVehicle,
  searchVehicles,
} from "../controllers/vehicleController.js";

import authMiddleware from "../middleware/authMiddleware.js";
import adminMiddleware from "../middleware/adminMiddleware.js";
import upload from "../middleware/uploadMiddleware.js";

const router = express.Router();

// Public
router.get("/", getVehicles);
router.get("/search", searchVehicles);
router.get("/:id", getVehicleById);

// Admin only
router.post(
  "/",
  authMiddleware,
  adminMiddleware,
  upload.single("image"),
  addVehicle
);

router.put(
  "/:id",
  authMiddleware,
  adminMiddleware,
  updateVehicle
);

router.delete(
  "/:id",
  authMiddleware,
  adminMiddleware,
  deleteVehicle
);

export default router;