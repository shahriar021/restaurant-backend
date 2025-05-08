const ProductController = require("../controllers/productController");
const express = require("express");
const router = express.Router();
const auth = require("../middlewares/authMiddleware");

router.post("/product", auth, ProductController.Products);

module.exports = router;
