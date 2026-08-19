const Service = require("../models/Service");

// GET all services (Home page ke liye)
const getServices = async (req, res) => {
  try {
    const services = await Service.find().sort({ createdAt: -1 });
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch services" });
  }
};

// GET single service
const getServiceById = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) return res.status(404).json({ message: "Service not found" });
    res.status(200).json(service);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch service" });
  }
};

// POST create service (Admin AddService.jsx ke liye)
const createService = async (req, res) => {
  try {
    const { title, description, icon, image } = req.body;
    const newService = await Service.create({ title, description, icon, image });
    res.status(201).json(newService);
  } catch (error) {
    res.status(500).json({ message: "Failed to create service" });
  }
};

// PUT update service (Admin ManageService.jsx ke liye)
const updateService = async (req, res) => {
  try {
    const updatedService = await Service.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedService) return res.status(404).json({ message: "Service not found" });
    res.status(200).json(updatedService);
  } catch (error) {
    res.status(500).json({ message: "Failed to update service" });
  }
};

// DELETE service
const deleteService = async (req, res) => {
  try {
    const deletedService = await Service.findByIdAndDelete(req.params.id);
    if (!deletedService) return res.status(404).json({ message: "Service not found" });
    res.status(200).json({ message: "Service deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete service" });
  }
};

module.exports = {
  getServices,
  getServiceById,
  createService,
  updateService,
  deleteService,
};