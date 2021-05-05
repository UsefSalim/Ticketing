const express = require('express');


const authRoutes = express.Router();
const {
  registerController,
  loginController,
  logoutController,
  registerAdminController,
} = require('../controllers/auth.controllers');


authRoutes.post('/register', registerController);
authRoutes.post('/admin/register', registerAdminController);
authRoutes.post('/login', loginController);
authRoutes.get('/logout', logoutController);

module.exports = authRoutes;
