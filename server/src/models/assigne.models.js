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
  date_creation: {
    type: String,
    default: new Date(Date.now()).toLocaleString(),
  },
  date_modification: {
    type: String,
    default: null,
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
