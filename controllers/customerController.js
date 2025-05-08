const bcrypt = require("bcryptjs");
const Customer = require("../models/customerModels");

exports.customerSign = async (req, res) => {
  const { name, password, cell, email } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    await Customer.customerSign(name, hashedPassword, cell, email);
    res.status(201).json({ message: "Customer Created." });
  } catch (err) {
    res.status(501).json({ message: "customer not created" });
  }
};
