const Joi = require('joi');

exports.TicketValidations = (data) => {
  const schema = Joi.object({
    titre: Joi.string().required().min(3).max(50),
    type: Joi.string().required().min(3).max(50),
    description: Joi.string().required().min(3).max(1024),
    urgence: Joi.string().valid('normal', 'urgent', 'tres urgent'),
    etat: Joi.string().valid('en attent', 'affecter', 'reafecter', 'cloturer'),
    id_user: Joi.string().required(),
  });

  return schema.validate(data);
};
