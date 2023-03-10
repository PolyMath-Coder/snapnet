const wardService = require('./ward.service');
const catchAsync = require('express-async-handler');

const createWard = catchAsync(async (req, res) => {
  const ward = await wardService.createWard(req.body);
  res.status(201).json({ status: true, message: 'Ward now created...', ward });
});

const getWards = catchAsync(async (req, res) => {
  const wards = await wardService.getWards;
  res
    .status(201)
    .json({ status: true, message: 'All wards retrieved... ', states });
});

module.exports = { createWard, getWards };
