const Joi = require('joi');

// register Validations

exports.registerValidations = (data) => {
  const schema = Joi.object({
    name: Joi.string().required().min(3).max(50).trim(),
    email: Joi.string().email().required().trim(),
    password: Joi.string().required().min(6),
    role: Joi.string().valid('Admin', 'User', 'Tech'),
    id_departement: Joi.string(),
  });
  return schema.validate(data);
};
// loginValidations

exports.loginValidations = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required().trim(),
    password: Joi.string().required(),
  });
  return schema.validate(data);
};
