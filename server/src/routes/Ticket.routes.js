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
  authMiddleware('Admin', 'User', 'Tech', User),
  getAllController
);
ticketRoutes.post(
  '/add',
  authMiddleware('Admin', 'User', null, User),
  addController
);
ticketRoutes.get(
  '/:_id',
  authMiddleware('Admin', 'Tech', null, User),
  getOneController
);
ticketRoutes.delete(
  '/:_id',
  authMiddleware('Admin', null, null, User),
  deleteOneController
);
ticketRoutes.put(
  '/:_id',
  authMiddleware('Admin', 'Tech', null, User),
  updateOneController
);

ticketRoutes.get(
  '/tech/alltech',
  authMiddleware('Admin', null, null, User),
  getAllTech
);

module.exports = ticketRoutes;
