const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Admin = require("./models/Admin");

dotenv.config();

const createAdmin = async () => {
  await mongoose.connect(process.env.MONGO_URI);

  const adminExists = await Admin.findOne({ email: "admin@towing.com" });
  if (adminExists) {
    console.log("Admin already exists");
    process.exit();
  }

  await Admin.create({
    username: "admin",
    email: "faiza333@gmail.com",
    password: "faiza123", 
  });

  console.log("Admin created successfully");
  process.exit();
};

createAdmin();