import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";

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

app.use(cors());
app.use(express.json());

// Uploaded images
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/vehicles", vehicleRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/users", userRoutes);

// Home
app.get("/", (req, res) => {
  res.send("RideNGo Backend Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
