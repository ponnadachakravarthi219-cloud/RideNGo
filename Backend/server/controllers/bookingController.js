import Booking from "../models/Booking.js";
import Vehicle from "../models/Vehicle.js";

export const createBooking = async (req, res) => {
  try {
    const {
      vehicleId,
      pickupLocation,
      startDate,
      endDate,
      totalAmount,
    } = req.body;

    if (
      !vehicleId ||
      !pickupLocation ||
      !startDate ||
      !endDate ||
      totalAmount === undefined
    ) {
      return res.status(400).json({
        message: "All booking fields are required",
      });
    }

    const vehicle = await Vehicle.findById(vehicleId);

    if (!vehicle) {
      return res.status(404).json({
        message: "Vehicle not found",
      });
    }

    if (!vehicle.available) {
      return res.status(400).json({
        message: "Vehicle is not available",
      });
    }

    const booking = await Booking.create({
      user: req.user.id,
      vehicle: vehicleId,
      pickupLocation,
      startDate,
      endDate,
      totalAmount,
    });

    res.status(201).json({
      message: "Booking created successfully",
      booking,
    });
  } catch (error) {
    console.error("Create Booking Error:", error);

    res.status(500).json({
      message: "Server error",
    });
  }
};

export const getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({
      user: req.user.id,
    })
      .populate("vehicle")
      .sort({ createdAt: -1 });

    res.status(200).json({
      count: bookings.length,
      bookings,
    });
  } catch (error) {
    console.error("Get Bookings Error:", error);

    res.status(500).json({
      message: "Server error",
    });
  }
};

export const cancelBooking = async (req, res) => {
  try {
    const booking = await Booking.findOne({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!booking) {
      return res.status(404).json({
        message: "Booking not found",
      });
    }

    if (booking.status === "completed") {
      return res.status(400).json({
        message: "Completed booking cannot be cancelled",
      });
    }

    booking.status = "cancelled";

    await booking.save();

    res.status(200).json({
      message: "Booking cancelled successfully",
      booking,
    });
  } catch (error) {
    console.error("Cancel Booking Error:", error);

    res.status(500).json({
      message: "Server error",
    });
  }
};