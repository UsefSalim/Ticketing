const xelor = require('xelor');
const Departement = require('../models/Departement.models');
const {
  DepartementValidations,
} = require('../validations/Departement.validations');

exports.addController = async (req, res) => {
  await xelor.add(req, res, Departement, DepartementValidations, {
    nom: req.body.nom,
  });
};

exports.getAllController = async (req, res) => {
  await xelor.getAll(res, Departement);
};

exports.getOneController = async (req, res) => {
  const { _id } = req.params;
  await xelor.getOne(res, Departement, { _id });
};

exports.deleteOneController = async (req, res) => {
  await xelor.deleteOne(req, res, Departement);
};

exports.updateOneController = async (req, res) => {
  console.log(req.body);
  await xelor.update(req, res, Departement, DepartementValidations);
};

exports.deletAllController = async (req, res) => {
  await xelor.deleteAll(res, Departement);
};
