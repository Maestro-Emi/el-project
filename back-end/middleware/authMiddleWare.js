const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel.js');

const protect = asyncHandler(async function (req, res, next) {
  let token;

  if (
    // Check if the authorization header exists and starts with 'Bearer'
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
        // Get the token from the header
      token = req.headers.authorization.split(' ')[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // Find the user by id and remove the password from the user object
      req.user = await User.findById(decoded.id).select('-password');

      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error('Not authorized, token failed');
    }
  }
  // Middleware function to check if the user is an admin
  if (!token) {
    res.status(401);
    throw new Error('Not authorized, no token');
  }
});

// Middleware function to check if the user is an admin
const admin = function (req, res, next) {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error('Not authorized as an admin');
  }
};

module.exports = { protect, admin };
