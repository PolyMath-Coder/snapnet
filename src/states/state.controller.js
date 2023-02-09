const stateService = require('./state.service');
const catchAsync = require('express-async-handler');

const createState = catchAsync(async (req, res) => {
  const data = await stateService.createState(req.body);
  res.status(201).json({ status: true, message: 'State now created...', data });
});

const getStates = catchAsync(async (req, res) => {
  const states = await stateService.getStates();
  res
    .status(201)
    .json({ status: true, message: 'All states retrieved... ', states });
});

module.exports = { createState, getStates };
