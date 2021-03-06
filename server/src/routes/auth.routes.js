const express = require('express');
const User = require('../models/user.models');

const authRoutes = express.Router();
const {
  registerController,
  loginController,
  logoutController,
} = require('../controllers/auth.controllers');
const { authMiddleware } = require('../middlewares/auth.middlewares');

authRoutes.post('/register', authMiddleware(User, 'Admin'), registerController);
authRoutes.post('/login', loginController);
authRoutes.get('/logout', logoutController);

module.exports = authRoutes;
