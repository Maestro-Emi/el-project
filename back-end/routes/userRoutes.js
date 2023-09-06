const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');
const authMiddleware = require('../middleware/authMiddleware.js');

const {
  registerUser,        // Route to register a new user
  getUsers,            // Route to get a list of users (admin access)
  authUser,            // Route to authenticate a user (login)
  getUserProfile,      // Route to get the user's profile
  updateUserProfile,  // Route to update the user's profile
} = userController;

const { protect, admin } = authMiddleware;

// Register a new user or get a list of users (admin access)
router.route('/').post(registerUser).get(protect, admin, getUsers);

// Authenticate a user (login)
router.post('/login', authUser);

router.route('/profile')
  .get(protect, getUserProfile)       // Get the user's profile
  .put(protect, updateUserProfile);   // Update the user's profile


module.exports = router;
