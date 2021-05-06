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
  deletAllController,
} = require('../controllers/Ticket.controllers');

ticketRoutes.get('/', authMiddleware('Admin', User), getAllController);
ticketRoutes.delete('/', authMiddleware('Admin', User), deletAllController);
ticketRoutes.post(
  '/add',
  authMiddleware('Admin' || 'User', User),
  addController
);
ticketRoutes.get(
  '/:_id',
  authMiddleware('Admin' || 'Tech', User),
  getOneController
);
ticketRoutes.delete(
  '/:_id',
  authMiddleware('Admin', User),
  deleteOneController
);
ticketRoutes.put(
  '/:_id',
  authMiddleware('Admin' || 'Tech', User),
  updateOneController
);

module.exports = ticketRoutes;
