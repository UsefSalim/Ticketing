const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const historiqueSchema = Schema({
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
});

module.exports = model('historique', historiqueSchema);
