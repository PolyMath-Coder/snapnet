const wardService = require('./ward.service');
const catchAsync = require('express-async-handler');

const createWard = catchAsync(async (req, res) => {
  const ward = await wardService.createWard(req.body);
  res.status(201).json({ status: true, message: 'Ward now created...', ward });
});

module.exports = { createWard };
