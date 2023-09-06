//not done yet


const express = require('express');
const router = express.Router(); // Creating a new router object

// Importing the product controller which contains functions to handle product-related requests
const productController = require('../controllers/productController.js');

const authMiddleware = require('../middleware/authMiddleware.js');

const { protect, admin } = authMiddleware;