const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    icon: {
      type: String, // icon name ya image URL
    },
    image: {
      type: String, // service card image (jese "Emergency Towing" wali)
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Service", serviceSchema);