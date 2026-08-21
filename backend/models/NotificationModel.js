const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["new_contact", "user_signup", "user_login", "user_approved", "user_pending"],
      default: "new_contact",
    },
    message: { type: String, required: true },
    // Link back to the related record (contact request, user, etc.)
    relatedId: { type: mongoose.Schema.Types.ObjectId, refPath: "relatedModel" },
    relatedModel: { type: String, enum: ["Contact", "User"], default: "Contact" },
    isRead: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Notification", notificationSchema);