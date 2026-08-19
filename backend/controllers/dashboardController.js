const Service = require("../models/Service");
const Blog = require("../models/Blog");

const getDashboardStats = async (req, res) => {
  try {
    const totalServices = await Service.countDocuments();
    const totalBlogs = await Blog.countDocuments();

    res.status(200).json({
      totalServices,
      totalBlogs,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch dashboard stats" });
  }
};

module.exports = { getDashboardStats };