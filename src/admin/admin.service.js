const Citizen = require('./citizen.model');
const ApiError = require('../helpers/error');

const createCitizen = async (data) => {
  try {
    const rawData = JSON.parse(JSON.stringify(data));
    return await Citizen.create(rawData);
  } catch (error) {
    throw new ApiError(400, 'Unable to create citizen...');
  }
};

module.exports = { createCitizen };
