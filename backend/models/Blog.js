const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    excerpt: {
      type: String, // short preview text card ke liye
    },
    author: {
      type: String,
      required: true,
    },
    category: {
      type: String, // e.g. "Design", "Towing Tips"
    },
    image: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blog", blogSchema);