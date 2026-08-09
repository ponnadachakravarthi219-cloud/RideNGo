import express from "express";

import {
  addReview,
  getVehicleReviews,
} from "../controllers/reviewController.js";

import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, addReview);

router.get("/vehicle/:vehicleId", getVehicleReviews);

export default router;