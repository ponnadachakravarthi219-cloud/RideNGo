import Review from "../models/Review.js";
import Vehicle from "../models/Vehicle.js";

export const addReview = async (req, res) => {
  try {
    const { vehicleId, rating, comment } = req.body;

    if (!vehicleId || !rating || !comment) {
      return res.status(400).json({
        message: "Vehicle, rating and comment are required",
      });
    }

    const vehicle = await Vehicle.findById(vehicleId);

    if (!vehicle) {
      return res.status(404).json({
        message: "Vehicle not found",
      });
    }

    const review = await Review.create({
      user: req.user.id,
      vehicle: vehicleId,
      rating,
      comment,
    });

    const populatedReview = await Review.findById(review._id)
      .populate("user", "name")
      .populate("vehicle", "name type brand");

    res.status(201).json({
      message: "Review added successfully",
      review: populatedReview,
    });
  } catch (error) {
    console.error("Add Review Error:", error);

    res.status(500).json({
      message: "Server error",
    });
  }
};

export const getVehicleReviews = async (req, res) => {
  try {
    const reviews = await Review.find({
      vehicle: req.params.vehicleId,
    })
      .populate("user", "name")
      .sort({ createdAt: -1 });

    res.status(200).json({
      count: reviews.length,
      reviews,
    });
  } catch (error) {
    console.error("Get Reviews Error:", error);

    res.status(500).json({
      message: "Server error",
    });
  }
};