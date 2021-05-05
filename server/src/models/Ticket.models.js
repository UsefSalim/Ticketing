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
    ennum:['normal', 'urgent', 'tres urgent'],
    default:'normal'
    required: true,
  },
  titre: {
    type: String,
    required: true,
  },
  titre: {
    type: String,
    required: true,
  },
});

module.exports = model('ticket', ticketSchema);
