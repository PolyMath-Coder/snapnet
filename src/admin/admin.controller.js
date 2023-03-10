const adminService = require('./admin.service');
const catchAsync = require('express-async-handler');

const createCitizen = catchAsync(async (req, res) => {
  const data = await adminService.createCitizen(req.body);
  res
    .status(200)
    .json({ status: true, message: 'Citizen now created...', data });
});

const getCitizens = catchAsync(async (req, res) => {
  const data = await adminService.getAllCitizens();
  res
    .status(201)
    .json({ status: true, message: 'All states retrieved... ', data });
});

const searchUser = catchAsync(async (req, res) => {
  const data = await adminService.searchUser(req.query.name);
  res
    .status(200)
    .json({ status: 'suceess', message: 'User now found... ', data });
});

module.exports = { createCitizen, getCitizens, searchUser };
