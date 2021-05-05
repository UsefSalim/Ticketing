const { login } = require('xelor');
const { register } = require('../utils/utiles');
const User = require('../models/user.models');
const {
  registerValidations,
  loginValidations,
} = require('../validations/auth.validations');

exports.registerController = async (req, res) => {
  const { email, role } = req.body;
  await register(req, res, User, registerValidations, { email }, role);
};
exports.loginController = async (req, res) => {
  const { email } = req.body;
  await login(req, res, User, loginValidations, { email });
};
exports.logoutController = (req, res) =>
  res.clearCookie('_token').json({ role: '', isAuthenticated: false });
