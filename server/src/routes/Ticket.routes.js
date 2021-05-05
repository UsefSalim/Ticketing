const express = require('express');

const ticketRoutes = express.Router();
const {
  addController,
  getAllController,
  getOneController,
  deleteOneController,
  updateOneController,
  deletAllController,
} = require('../controllers/Ticket.controllers');

ticketRoutes.get('/', getAllController);
ticketRoutes.delete('/', deletAllController);
ticketRoutes.post('/add', addController);
ticketRoutes.get('/:_id', getOneController);
ticketRoutes.delete('/:_id', deleteOneController);
ticketRoutes.put('/:_id', updateOneController);

module.exports = ticketRoutes;
