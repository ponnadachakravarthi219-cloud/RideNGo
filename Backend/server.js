import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./server/config/db.js";
import authRoutes from "./server/routes/authRoutes.js";
import vehicleRoutes from "./server/routes/vehicleRoutes.js";
import bookingRoutes from "./server/routes/bookingRoutes.js";
import paymentRoutes from "./server/routes/paymentRoutes.js";
import adminRoutes from "./server/routes/adminRoutes.js";


dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

app.use("/api/vehicles", vehicleRoutes);

app.use("/api/bookings", bookingRoutes);

app.use("/api/payments", paymentRoutes);

app.use("/api/admin", adminRoutes);
app.get("/", (req, res) => {
  res.send("RideNGo Backend Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
