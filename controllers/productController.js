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

exports.ProductsSearch = async (req, res) => {
  const { pName } = req.body;

  try {
    const product = await Product.findProduct(pName);
    res.status(200).send(product);
  } catch (err) {
    res.status(501).json({ message: "product not found." });
  }
};

exports.DeleteProduct = async (req, res) => {
  const { id } = req.params;
  console.log(id, "id");

  try {
    const result = await Product.deleteProduct(id);
    console.log(result);
    res.status(200).json({ message: "deleted" });
  } catch (err) {
    res.status(500).json({ message: "not found." });
    console.log(err);
  }
};
