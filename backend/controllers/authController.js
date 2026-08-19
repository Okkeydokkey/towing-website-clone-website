const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

// LOGIN
const loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const isMatch = await admin.matchPassword(password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = generateToken(admin._id);

    res.status(200).json({
      message: "Login successful",
      token,
      admin: {
        id: admin._id,
        username: admin.username,
        email: admin.email,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong, try again" });
  }
};

// LOGOUT
const logoutAdmin = (req, res) => {
  // JWT stateless hai, so logout sirf frontend pe token clear karta hai
  res.status(200).json({ message: "Logout successful" });
};

// CHECK CURRENT LOGGED-IN ADMIN (for dynamic login state)
const getMe = async (req, res) => {
  try {
    const admin = await Admin.findById(req.admin.id).select("-password");
    res.status(200).json({ admin });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch admin" });
  }
};
// UPDATE PROFILE (email/password change)
const updateProfile = async (req, res) => {
  try {
    const admin = await Admin.findById(req.admin.id);

    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    const { email, currentPassword, newPassword } = req.body;

    // Password change chahiye to current password verify karo
    if (newPassword) {
      if (!currentPassword) {
        return res.status(400).json({ message: "Current password is required" });
      }
      const isMatch = await admin.matchPassword(currentPassword);
      if (!isMatch) {
        return res.status(401).json({ message: "Current password is incorrect" });
      }
      admin.password = newPassword; // pre-save hook auto-hash kar dega
    }

    if (email) {
      admin.email = email;
    }

    await admin.save();

    res.status(200).json({
      message: "Profile updated successfully",
      admin: {
        id: admin._id,
        username: admin.username,
        email: admin.email,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to update profile" });
  }
};

module.exports = { loginAdmin, logoutAdmin, getMe, updateProfile };