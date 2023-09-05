const express = require("express");
const asyncHandler = require("express-async-handler"); // Middleware for handling async operations
const router = express.Router();
const Product = require("../models/productModel");

// Route to get all products
router.get(
  "/",
  asyncHandler(async (req, res) => {
    // Use Product model to find all products in the database
    const products = await Product.find({});
    res.json(products); 
  })
);

// Route to get a specific product by ID
router.get(
  "/:id", 
  asyncHandler(async (req, res) => {
    // Use Product model to find a product by its ID
    const product = await Product.findById(req.params.id);

    if (!product) {
      res.status(404).json({ message: "Product not found" });
    } else {
      res.json(product); 
    }
  })
);

module.exports = router; 
