const express = require('express');
const User = require('../models/user.models');
const { authMiddleware } = require('../middlewares/auth.middlewares');

const departementRoutes = express.Router();
const {
  addController,
  getAllController,
  getOneController,
  deleteOneController,
  updateOneController,
  deletAllController,
} = require('../controllers/Departement.controllers');

departementRoutes.get('/', authMiddleware('Admin', User), getAllController);
departementRoutes.delete(
  '/',
  authMiddleware('Admin', User),
  deletAllController
);
departementRoutes.post('/add', authMiddleware('Admin', User), addController);
departementRoutes.get('/:_id', authMiddleware('Admin', User), getOneController);
departementRoutes.delete(
  '/:_id',
  authMiddleware('Admin', User),
  deleteOneController
);
departementRoutes.put(
  '/:_id',
  authMiddleware('Admin', User),
  updateOneController
);

module.exports = departementRoutes;
