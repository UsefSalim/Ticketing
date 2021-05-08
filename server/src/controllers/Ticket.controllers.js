/* eslint-disable no-restricted-syntax */
const xelor = require('xelor');
const Fawn = require('fawn');
const utils = require('../utils/utiles');
const Ticket = require('../models/Ticket.models');
const Assigne = require('../models/assigne.models');
const User = require('../models/user.models');
const { TicketValidations } = require('../validations/Ticket.validations');

exports.addController = async (req, res) => {
  const { _id } = res.currentUser;
  console.log(_id);
  await utils.add(req, res, Ticket, TicketValidations, {
    id_user: _id,
  });
};

exports.getAllController = async (req, res) => {
  const currenUser = res.currentUser;
  if (req.params.type === 'admin') await xelor.getAll(res, Ticket, 'id_user');
  else if (req.params.type === 'user')
    await xelor.getAll(res, Ticket, null, null, null, null, {
      id_user: currenUser._id,
    });
  else if (req.params.type === 'technicien') {
    const techTicket = await Assigne.find({
      id_tech: currenUser._id,
      etat: { $in: ['affecté', 'reafecté'] },
    }).populate('id_ticket');
    techTicket && res.status(200).json(techTicket);
  }
};

exports.getAllTech = async (req, res) => {
  await xelor.getAll(res, User, null, 'name', null, null, { role: 'Tech' });
};

exports.getOneController = async (req, res) => {
  const { _id } = req.params;
  await xelor.getOne(res, Ticket, { _id }, 'id_user');
};

exports.deleteOneController = async (req, res) => {
  await xelor.deleteOne(req, res, Ticket);
};

exports.updateOneController = async (req, res) => {
  const task = Fawn.Task();
  const id_ticket = req.params._id;
  if (req.body.type === 'admin') {
    const { id_tech } = req.body;
    const assignedToTechnisien = await Assigne.findOne({ id_ticket, id_tech });
    const etat = assignedToTechnisien ? 'reafecté' : 'affecté';
    const newAssigne = new Assigne({
      id_ticket,
      id_tech,
      etat,
      etat_initial: etat,
    });
    const updateStateAndAddAssigne = await task
      .update('ticket', { _id: id_ticket }, { $set: { etat } })
      .save('assigne', newAssigne)
      .run({ useMongoose: true });
    if (updateStateAndAddAssigne) return res.status(201).json('updated');
  } else if (req.body.type === 'technicien') {
    // const id_tech = res.currentUser;
    const techTicket = await Assigne.findOne({
      id_tech: res.currentUser._id,
      etat: { $in: ['affecté', 'reafecté'] },
    });
    if (techTicket) {
      console.log(techTicket);
      console.log(req.body.etat);
      const updateStateAndcreateAssigne = await task
        .update('ticket', { _id: id_ticket }, { $set: { etat: req.body.etat } })
        .update(
          'assigne',
          { id_ticket, etat: { $in: ['affecté', 'reafecté'] } },
          { $set: { etat: req.body.etat } }
        )
        .run({ useMongoose: true });
      if (updateStateAndcreateAssigne) return res.status(201).json('updated');
    }
  }
};
