const express = require("express");
const router = express.Router();
const productController = require("../controllers/product.controller");

router.post("/products", productController.createProduct);
router.get("/products", productController.getAllProducts);

router.get("/products/search", productController.getProductsByName);

router.get("/products/:id", productController.getProductById);
router.put("/products/:id", productController.updateProduct);
router.delete("/products/:id", productController.deleteProduct);

router.get(
  "/products/category/:categoryId",
  productController.getProductsByCategory
);


module.exports = router;
