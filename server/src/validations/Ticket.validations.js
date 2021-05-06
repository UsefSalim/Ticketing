const Joi = require('joi');

exports.ticketValidations = (data) => {
  const schema = Joi.object({
    titre: Joi.string().required().min(3).max(50),
    type: Joi.string().required().min(3).max(50),
    description: Joi.string().required().min(3).max(1024),
    urgence: Joi.string().valid('normal', 'urgent', 'tres urgent'),
    etat: Joi.string().valid('en attent', 'affecter', 'reafecter', 'cloturer'),
    user_id: Joi.string(),
  });

  return schema.validate(data);
};
