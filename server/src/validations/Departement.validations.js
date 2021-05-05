const Joi = require('joi');

exports.DepartementValidations = (data) => {
  const schema = Joi.object({
    nom: Joi.string().required().min(3).max(50),
    responsable: Joi.string().required().min(3).max(50),
    activite: Joi.string().required().min(3).max(50),
  });

  return schema.validate(data);
};
