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

departementRoutes.get('/', authMiddleware(User, 'Admin'), getAllController);
departementRoutes.delete(
  '/',
  authMiddleware(User, 'Admin'),
  deletAllController
);
departementRoutes.post('/add', authMiddleware(User, 'Admin'), addController);
departementRoutes.get('/:_id', authMiddleware(User, 'Admin'), getOneController);
departementRoutes.delete(
  '/:_id',
  authMiddleware(User, 'Admin'),
  deleteOneController
);
departementRoutes.put(
  '/:_id',
  authMiddleware(User, 'Admin'),
  updateOneController
);

module.exports = departementRoutes;
