/* eslint-disable no-return-await */
/* eslint-disable no-underscore-dangle */
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const ObjectID = require('mongoose').Types.ObjectId;

/**
 *
 * @param {Object} Model
 * @param {Object} finder
 * @param {String} populate
 * @param {String} select
 * @returns
 */
exports.ifExist = async (Model, finder, populate = null, select = null) =>
  await Model.findOne(finder).populate(populate).select(select);
/**
 *
 * @param {Response} res
 * @param {Object} Model
 * @param {String} populate
 * @param {String} select
 * @param {String} sort
 * @param {Number} limit
 * @param {Object} finder
 * @returns
 */
exports.getAll = async (
  Model,
  finder = null,
  populate = null,
  select = null,
  sort = null
) => {
  const all = await Model.find(finder)
    .populate(populate)
    .select(select)
    .sort(sort);
  if (all) return all;
};
/**
 *
 * @param {Response} res
 * @param {Object} Model
 * @param {*} unique
 * @param {String} finder
 * @param {String} populate
 * @param {String} select
 * @returns
 */
exports.getOne = async (res, Model, finder, populate = null, select = null) => {
  const single = await this.ifExist(Model, finder, populate, select);
  if (single) return single;
};

/**
 *
 * @param {Request} req
 * @param {Response} res
 * @param {Object} Model
 * @param {Object} validation
 * @param {Object} finder
 * @param {Object} multer
 * @returns
 */
exports.add = async (req, res, Model, validation, id_user) => {
  const id = id_user.id_user.toString();
  const { error } = validation({ ...req.body, id_user: id });
  if (error) return res.status(400).json(error.details[0].message);
  const newElement = new Model({ ...req.body, ...id_user });
  const savedElement = await newElement.save();
  return res.status(201).json(savedElement);
};

// =================== Auth ======================//
/**
 *
 * @param {*} data
 * @returns
 */
exports.createToken = (data) =>
  jwt.sign({ data }, process.env.SECRET_TOKEN, {
    expiresIn: process.env.JWT_EXPIRATION_TIME,
  });
/**
 *
 * @param {Request} req
 * @param {Response} res
 * @param {Object} Model
 * @param {Object} validation
 * @param {*} unique
 * @param {String} finder
 * @param {String} Role
 * @returns
 */
exports.register = async (
  req,
  res,
  Model,
  validation = null,
  finder = null,
  Role = null
) => {
  if (validation) {
    const { error } = validation(req.body);
    if (error) return res.status(400).json(error.details[0].message);
  }
  if (finder) {
    const ifUserExist = await this.ifExist(Model, finder);
    if (ifUserExist)
      return res
        .status(400)
        .json(
          `${Object.keys(finder)[0]} : ${
            finder[Object.keys(finder)[0]]
          } exist deja `
        );
  }
  const newUser = new Model({ ...req.body });
  newUser.password = await bcrypt.hash(
    req.body.password,
    await bcrypt.genSalt(10)
  );
  if (Role) newUser.role = Role;
  const savedUser = await newUser.save();
  if (savedUser) {
    return res.status(200).json('User Created');
  }
};

// ==============Middleware ==================== //
exports.auth = async (req, res, next) => {
  const token = req.cookies._token;
  if (token) {
    jwt.verify(token, process.env.SECRET_TOKEN, async (err, decodedToken) => {
      if (
        !err &&
        (decodedToken.data.role === res.Role1 ||
          decodedToken.data.role === res.Role2 ||
          decodedToken.data.role === res.Role3)
      ) {
        res.currentUser = await res.Model.findOne({
          _id: decodedToken.data.id,
        }).select('-password');
        next();
      } else {
        res.clearCookie('_token').json(`private root need ${res.Role} login`);
      }
    });
  } else {
    return res.status(400).json(`private root need ${res.Role} login`);
  }
};
