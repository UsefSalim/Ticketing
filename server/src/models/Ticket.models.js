const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const ticketSchema = Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = model('ticket', ticketSchema);
