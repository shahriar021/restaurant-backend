const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/userModels");
require("dotenv").config();

exports.register = async (req, res) => {
  const { full_name, password, email, mobile } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    await User.createUser(full_name, email, hashedPassword, mobile);
    res.status(201).json({ message: "User registered" });
  } catch (err) {
    res.status(500).json({ error: "Registration failed" });
    console.log(err);
  }
};
