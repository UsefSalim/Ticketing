const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const assigneSchema = Schema({
  id_ticket: {
    type: Schema.Types.ObjectId,
    ref: 'ticket',
    required: true,
  },
  id_tech: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  etat: {
    type: String,
    default: 'affecté',
  },
  etat_initial: {
    type: String,
    required: true,
  },
});

module.exports = model('assigne', assigneSchema);
