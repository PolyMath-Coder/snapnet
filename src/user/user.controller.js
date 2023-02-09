const userService = require('./user.service');
const catchAsync = require('express-async-handler');

const createUser = catchAsync(async (req, res) => {
  const user = await userService.createUser(req.body);
  res.status(200).json({ status: true, message: 'User now created...', user });
});

module.exports = { createUser };
