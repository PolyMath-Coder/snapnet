const User = require('./user.model');
const bcrypt = require('bcryptjs');
const ApiError = require('../helpers/error');

const createUser = async (data) => {
  try {
    const rawData = JSON.parse(JSON.stringify(data));
    rawData.password = await bcrypt.hash(rawData.password, 10);
    return await User.create(rawData);
  } catch (error) {
    throw new ApiError(400, 'Unable to create user');
  }
};
module.exports = { createUser };
