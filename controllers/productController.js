const Product = require("../models/productModel");

exports.Products = async (req, res) => {
  const { pName, price } = req.body;

  try {
    await Product.createProducts(pName, price);
    res.status(201).json({ message: "products added" });
  } catch (err) {
    res.status(501).json({ message: "products not added." });
  }
};
