const Joi = require('joi');

exports.ticketValidations = (data) => {
  const schema = Joi.object({
    titre: Joi.string().required().min(3).max(50),
    type: Joi.string().required().min(3).max(50),
    urgence: Joi.string()..valid('Admin', 'User', 'Tech')
  });

  return schema.validate(data);
};
