/* eslint-disable no-restricted-syntax */
const xelor = require('xelor');
const Fawn = require('fawn');
const utils = require('../utils/utiles');
const Ticket = require('../models/Ticket.models');
const Assigne = require('../models/assigne.models');
const User = require('../models/user.models');
const { TicketValidations } = require('../validations/Ticket.validations');

exports.addController = async (req, res) => {
  await xelor.add(req, res, Ticket, TicketValidations);
};

exports.getAllController = async (req, res) => {
  const currenUser = res.currentUser;
  // console.log(currenUser);
  const ids = [];
  if (req.params.type === 'admin') await xelor.getAll(res, Ticket, 'id_user');
  else if (req.params.type === 'user')
    await xelor.getAll(res, Ticket, null, null, null, null, {
      id_user: currenUser._id,
    });
  else if (req.params.type === 'technicien') {
    const techTicket = await Assigne.find({ id_tech: currenUser._id }).populate(
      'id_ticket'
    );
    techTicket && res.status(200).json(techTicket);
  }
};

exports.getAllTech = async (req, res) => {
  await xelor.getAll(res, User, null, 'name', null, null, { role: 'Tech' });
};
// exports.getAllUserTickets = async (req, res) => {
//   const { currentUser } = req.body;
//   await xelor.getAll(res, Ticket, null, null, '-1', null, { _id: req.body.id });
// };

exports.getOneController = async (req, res) => {
  const { _id } = req.params;
  await xelor.getOne(res, Ticket, { _id }, 'id_user');
};

exports.deleteOneController = async (req, res) => {
  await xelor.deleteOne(req, res, Ticket);
};

exports.updateOneController = async (req, res) => {
  const task = Fawn.Task();
  console.log(req.params._id);
  if (req.body.type === 'admin') {
    const newAssigne = new Assigne({
      id_ticket: req.params._id,
      id_tech: req.body.id_tech,
    });
    const etatTicket = await Ticket.findOne({ _id: req.params._id });
    if (etatTicket && etatTicket.etat === 'en attent') {
      const updateStateAndAddAssigne = await task
        .update(
          'ticket',
          { _id: req.params._id },
          { $set: { etat: req.body.etat } }
        )
        .save('assigne', newAssigne)
        .save('historique', newAssigne)
        .run({ useMongoose: true });
      if (updateStateAndAddAssigne) return res.status(201).json('updated');
    } else if (etatTicket && etatTicket.etat !== 'en attent') {
      const updateStateAndAddAssigne = await task
        .update(
          'ticket',
          { _id: req.params._id },
          { $set: { etat: req.body.etat } }
        )
        .update(
          'assigne',
          { id_ticket: req.params._id },
          { $set: { id_tech: req.body.id_tech } }
        )
        .save('historique', newAssigne)
        .run({ useMongoose: true });
      if (updateStateAndAddAssigne) return res.status(201).json('updated');
    }
  } else if (req.body.type === 'technicien') {
    Ticket.findByIdAndUpdate(
      { _id: req.params._id },
      { $set: { etat: req.body.etat } },
      { new: true, useFindAndModify: true, upsert: true },
      (err, updated) => {
        !err ? res.status(200).json(updated) : res.status(400).json({ err });
      }
    );
  }
};
