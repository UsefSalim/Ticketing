const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const userSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    ennum: ['User', 'Admin', 'Tech'],
    default: 'User',
  },
  matricule: {
    type: String,
    required: true,
    default: Date.now(),
  },
  date_embauche: {
    type: Date,
    default: Date.now(),
  },
  id_departement: {
    type: Schema.Types.ObjectId,
    ref: 'departement',
    required: true,
  },
});

module.exports = model('user', userSchema);
