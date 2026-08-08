import Vehicle from "../models/Vehicle.js";

export const addVehicle = async (req, res) => {
  try {
    const {
      name,
      type,
      brand,
      model,
      registrationNumber,
      pricePerDay,
      location,
      image,
    } = req.body;

    if (
      !name ||
      !type ||
      !brand ||
      !model ||
      !registrationNumber ||
      !pricePerDay ||
      !location
    ) {
      return res.status(400).json({
        message: "All required fields must be provided",
      });
    }

    const existingVehicle = await Vehicle.findOne({
      registrationNumber,
    });

    if (existingVehicle) {
      return res.status(400).json({
        message: "Vehicle already exists",
      });
    }

    const vehicle = await Vehicle.create({
      name,
      type,
      brand,
      model,
      registrationNumber,
      pricePerDay,
      location,
      image,
    });

    res.status(201).json({
      message: "Vehicle added successfully",
      vehicle,
    });
  } catch (error) {
    console.error("Add Vehicle Error:", error);

    res.status(500).json({
      message: "Server error",
    });
  }
};

export const getVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.find().sort({ createdAt: -1 });

    res.status(200).json({
      count: vehicles.length,
      vehicles,
    });
  } catch (error) {
    console.error("Get Vehicles Error:", error);

    res.status(500).json({
      message: "Server error",
    });
  }
};

export const getVehicleById = async (req, res) => {
  try {
    const vehicle = await Vehicle.findById(req.params.id);

    if (!vehicle) {
      return res.status(404).json({
        message: "Vehicle not found",
      });
    }

    res.status(200).json(vehicle);
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
};