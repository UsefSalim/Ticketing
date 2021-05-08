const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const ticketSchema = Schema({
  titre: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  urgence: {
    type: String,
    ennum: ['normal', 'urgent', 'tres urgent'],
    default: 'normal',
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  etat: {
    type: String,
    ennum: ['en attent', 'affecté', 're-en attent', 'reafecté', 'cloturé'],
    default: 'en attent',
    required: true,
  },
  id_user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = model('ticket', ticketSchema);
