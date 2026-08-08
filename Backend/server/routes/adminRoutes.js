import express from "express";

import {
  getDashboard,
  getUsers,
  getBookings,
  getPayments,
} from "../controllers/adminController.js";

import authMiddleware from "../middleware/authMiddleware.js";
import adminMiddleware from "../middleware/adminMiddleware.js";

const router = express.Router();

router.get(
  "/dashboard",
  authMiddleware,
  adminMiddleware,
  getDashboard
);

router.get(
  "/users",
  authMiddleware,
  adminMiddleware,
  getUsers
);

router.get(
  "/bookings",
  authMiddleware,
  adminMiddleware,
  getBookings
);

router.get(
  "/payments",
  authMiddleware,
  adminMiddleware,
  getPayments
);

export default router;