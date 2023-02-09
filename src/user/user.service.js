const User = require('./user.model');
const ApiError = require('../helpers/error');

const createUser = async (data) => {
  try {
    const rawData = JSON.parse(JSON.stringify(data));
    return await User.create(rawData);
  } catch (error) {
    throw new ApiError(400, 'Unable to create user');
  }
};
module.exports = { createUser };
