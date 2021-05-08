const express = require('express');
const User = require('../models/user.models');
const { authMiddleware } = require('../middlewares/auth.middlewares');

const ticketRoutes = express.Router();
const {
  addController,
  getAllController,
  getOneController,
  deleteOneController,
  updateOneController,
  getAllTech,
} = require('../controllers/Ticket.controllers');

ticketRoutes.get(
  '/',
  authMiddleware(User, 'Admin', 'User', 'Tech'),
  getAllController
);
ticketRoutes.post('/add', authMiddleware(User, 'Admin', 'User'), addController);
ticketRoutes.get(
  '/:_id',
  authMiddleware(User, 'Admin', 'Tech'),
  getOneController
);
ticketRoutes.delete(
  '/:_id',
  authMiddleware(User, 'Admin'),
  deleteOneController
);
ticketRoutes.put(
  '/:_id',
  authMiddleware(User, 'Admin', 'Tech'),
  updateOneController
);

ticketRoutes.get('/tech/alltech', authMiddleware(User, 'Admin'), getAllTech);

module.exports = ticketRoutes;
