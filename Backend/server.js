import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import connectDB from "./server/config/db.js";
import authRoutes from "./server/routes/authRoutes.js";
import vehicleRoutes from "./server/routes/vehicleRoutes.js";
import bookingRoutes from "./server/routes/bookingRoutes.js";
import paymentRoutes from "./server/routes/paymentRoutes.js";
import adminRoutes from "./server/routes/adminRoutes.js";
import reviewRoutes from "./server/routes/reviewRoutes.js";
import userRoutes from "./server/routes/userRoutes.js";

dotenv.config();

connectDB();

const app = express();

// ===============================
// ES Module __dirname
// ===============================
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Frontend build location
const frontendPath = path.join(__dirname, "../Frontend/dist");

// ===============================
// Middleware
// ===============================
app.use(cors());
app.use(express.json());

// ===============================
// Uploaded images
// ===============================
app.use(
  "/uploads",
  express.static(path.join(__dirname, "uploads"))
);

// ===============================
// API Routes
// ===============================
app.use("/api/auth", authRoutes);
app.use("/api/vehicles", vehicleRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/users", userRoutes);

// ===============================
// Serve React Frontend
// ===============================
app.use(express.static(frontendPath));

// ===============================
// React Router Fallback
// ===============================
app.use((req, res, next) => {
  if (
    req.method !== "GET" ||
    req.path.startsWith("/api/") ||
    req.path.startsWith("/uploads/")
  ) {
    return next();
  }

  res.sendFile(path.join(frontendPath, "index.html"));
});

// ===============================
// Server
// ===============================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`RideNGo server running on port ${PORT}`);
});