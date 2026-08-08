import User from "../models/User.js";
import Vehicle from "../models/Vehicle.js";
import Booking from "../models/Booking.js";
import Payment from "../models/Payment.js";

export const getDashboard = async (req, res) => {
  try {
    const users = await User.countDocuments();
    const vehicles = await Vehicle.countDocuments();
    const bookings = await Booking.countDocuments();
    const payments = await Payment.countDocuments();

    res.status(200).json({
      users,
      vehicles,
      bookings,
      payments,
    });
  } catch (error) {
    console.error("Dashboard Error:", error);

    res.status(500).json({
      message: "Server error",
    });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find()
      .select("-password")
      .sort({ createdAt: -1 });

    res.status(200).json({
      count: users.length,
      users,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
};

export const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate("user", "name email phone")
      .populate("vehicle")
      .sort({ createdAt: -1 });

    res.status(200).json({
      count: bookings.length,
      bookings,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
};

export const getPayments = async (req, res) => {
  try {
    const payments = await Payment.find()
      .populate("user", "name email")
      .populate("booking")
      .sort({ createdAt: -1 });

    res.status(200).json({
      count: payments.length,
      payments,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
};