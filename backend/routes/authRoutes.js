const express = require("express");
const router = express.Router();
const { loginAdmin, logoutAdmin, getMe, updateProfile } = require("../controllers/authController");
const { protect } = require("../middleware/authMiddleware");

router.post("/login", loginAdmin);
router.post("/logout", logoutAdmin);
router.get("/me", protect, getMe);
router.put("/profile", protect, updateProfile);

module.exports = router;

