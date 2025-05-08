const ProductController = require("../controllers/productController");
const express = require("express");
const router = express.Router();
const auth = require("../middlewares/authMiddleware");

router.post("/product", auth, ProductController.Products);
router.get("/findProduct", ProductController.ProductsSearch);
router.delete("/deleteProduct/:id", auth, ProductController.DeleteProduct);

module.exports = router;
