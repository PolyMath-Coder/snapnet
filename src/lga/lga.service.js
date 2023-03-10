const LGA = require('./lga.model');
const ApiError = require('../helpers/error');

const createLGA = async (data) => {
  try {
    const rawData = JSON.parse(JSON.stringify(data));
    return await LGA.create(rawData);
  } catch (error) {
    throw new ApiError(400, 'Unable to create LGA');
  }
};

const getLGAs = async () => {
  return await LGA.find().sort({ _id: -1 });
};

module.exports = { createLGA, getLGAs };
