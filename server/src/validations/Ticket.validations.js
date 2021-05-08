const Joi = require('joi');

exports.TicketValidations = (data) => {
  console.log(data);
  const schema = Joi.object({
    titre: Joi.string().required().min(3).max(50),
    type: Joi.string().required().min(3).max(50),
    description: Joi.string().required().min(3).max(1024),
    urgence: Joi.string().valid('normal', 'urgent', 'tres urgent'),
    id_user: Joi.string().required(),
  });

  return schema.validate(data);
};
