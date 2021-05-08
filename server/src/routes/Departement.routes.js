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

departementRoutes.get(
  '/',
  authMiddleware('Admin', null, null, User),
  getAllController
);
departementRoutes.delete(
  '/',
  authMiddleware('Admin', null, null, User),
  deletAllController
);
departementRoutes.post(
  '/add',
  authMiddleware('Admin', null, null, User),
  addController
);
departementRoutes.get(
  '/:_id',
  authMiddleware('Admin', null, null, User),
  getOneController
);
departementRoutes.delete(
  '/:_id',
  authMiddleware('Admin', null, null, User),
  deleteOneController
);
departementRoutes.put(
  '/:_id',
  authMiddleware('Admin', null, null, User),
  updateOneController
);

module.exports = departementRoutes;
