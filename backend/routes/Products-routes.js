const express = require("express");
const router = express.Router();
const productsController = require("../controllers/ProductsController");

router.get("/categories", productsController.getAllCategories);

router.get("/", productsController.getAllProducts);

router.get("/:productId", productsController.getSingleProduct);

module.exports = router;
