const State = require('./state.model');
const ApiError = require('../helpers/error');

const createState = async (data) => {
  const rawData = JSON.parse(JSON.stringify(data));
  return await State.create(rawData);
};

module.exports = { createState };
