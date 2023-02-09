const stateService = require('./state.service');
const catchAsync = require('express-async-handler');

const createState = catchAsync(async (req, res) => {
  const data = await stateService.createState(req.body);
  res.status(201).json({ status: true, message: 'State now created...', data });
});

module.exports = { createState };
