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

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findUserByEmail(email);

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  res.json({ token });
};
