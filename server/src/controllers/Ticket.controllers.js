const xelor = require('xelor');
const Ticket = require('../models/Ticket.models');
const {
  TicketValidations,
} = require('../validations/Ticket.validations');

exports.addController = async (req, res) => {
  await xelor.add(req, res, Ticket, TicketValidations);
};

exports.getAllController = async (req, res) => {
  await xelor.getAll(res, Ticket);
};

exports.getOneController = async (req, res) => {
  const { _id } = req.params;
  await xelor.getOne(res, Ticket, { _id });
};

exports.deleteOneController = async (req, res) => {
  await xelor.deleteOne(req, res, Ticket);
};

exports.updateOneController = async (req, res) => {
  await xelor.update(req, res, Ticket, TicketValidations);
};

exports.deletAllController = async (req, res) => {
  await xelor.deleteAll(res, Ticket);
};
