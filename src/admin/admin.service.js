const Citizen = require('./citizen.model');
const ApiError = require('../helpers/error');
const User = require('../user/user.model');

const createCitizen = async (data) => {
  try {
    const rawData = JSON.parse(JSON.stringify(data));
    return await Citizen.create(rawData);
  } catch (error) {
    throw new ApiError(400, 'Unable to create citizen...');
  }
};

const searchUser = async (data) => {
  try {
    return await User.find({ $text: { $search: data } });
  } catch (error) {
    throw new ApiError(400, 'Unable to provide result for search item...');
  }
};

module.exports = { createCitizen, searchUser };
