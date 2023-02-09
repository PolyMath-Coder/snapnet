const Ward = require('./ward.model');
const ApiError = require('../helpers/error');

const createWard = async (data) => {
  try {
    const rawData = JSON.parse(JSON.stringify(data));
    return await Ward.create(rawData);
  } catch (error) {
    throw new ApiError(400, 'Unable to create Ward...');
  }
};

const getWards = async () => {
  return await Ward.find().sort({ _id: -1 });
};

module.exports = { createWard, getWards };
