const ProductController = require("../controllers/productController");
const express = require("express");
const router = express.Router();

router.post("/product", ProductController.Products);

module.exports = router;
