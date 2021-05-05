const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const departementSchema = Schema({
  nom: {
    type: String,
    required: true,
    unique: true,
    min: 3,
    max: 48,
  },
  responsable: {
    type: String,
    required: true,
    min: 3,
    max: 48,
  },
  activite: {
    type: String,
    required: true,
    min: 3,
    max: 48,
  },
});

module.exports = model('departement', departementSchema);
