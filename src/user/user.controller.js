const userService = require('./user.service');
const catchAsync = require('express-async-handler');
const tokenService = require('../auth/token.service');

const createUser = catchAsync(async (req, res) => {
  const user = await userService.createUser(req.body);
  const token = await tokenService.generateAuthTokens(user);
  res
    .status(200)
    .json({ status: true, message: 'User now created...', user, token });
});

module.exports = { createUser };
