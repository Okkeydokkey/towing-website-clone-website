const express = require("express");
const {
  createContact,
  getContacts,
  updateContactStatus,
  deleteContact,
} = require("../controllers/contactController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", createContact);
router.get("/", protect, getContacts);
router.patch("/:id", protect, updateContactStatus);
router.delete("/:id", protect, deleteContact);

module.exports = router;