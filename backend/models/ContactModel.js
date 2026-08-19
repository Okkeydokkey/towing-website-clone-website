const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    address: { type: String, required: true, trim: true },
    serviceType: { type: String, trim: true, default: "" },
    vehicleInfo: { type: String, trim: true, default: "" },
    vehicleCondition: { type: String, trim: true, default: "" },
    message: { type: String, trim: true, default: "" },
    status: { type: String, enum: ["new", "contacted", "closed"], default: "new" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Contact", contactSchema);