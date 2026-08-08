import Payment from "../models/Payment.js";
import Booking from "../models/Booking.js";

export const createPayment = async (req, res) => {
  try {
    const { bookingId, method } = req.body;

    if (!bookingId || !method) {
      return res.status(400).json({
        message: "Booking ID and payment method are required",
      });
    }

    const booking = await Booking.findOne({
      _id: bookingId,
      user: req.user.id,
    });

    if (!booking) {
      return res.status(404).json({
        message: "Booking not found",
      });
    }

    if (booking.status === "cancelled") {
      return res.status(400).json({
        message: "Cancelled booking cannot be paid",
      });
    }

    const payment = await Payment.create({
      user: req.user.id,
      booking: booking._id,
      amount: booking.totalAmount,
      method,
      status: "success",
      transactionId: `RNG-${Date.now()}`,
    });

    booking.status = "confirmed";
    await booking.save();

    res.status(201).json({
      message: "Payment successful",
      payment,
      booking,
    });
  } catch (error) {
    console.error("Payment Error:", error);

    res.status(500).json({
      message: "Server error",
    });
  }
};

export const getMyPayments = async (req, res) => {
  try {
    const payments = await Payment.find({
      user: req.user.id,
    })
      .populate("booking")
      .sort({ createdAt: -1 });

    res.status(200).json({
      count: payments.length,
      payments,
    });
  } catch (error) {
    console.error("Get Payments Error:", error);

    res.status(500).json({
      message: "Server error",
    });
  }
};