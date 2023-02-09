const { Router } = require('express');
const { createUser } = require('./user.controller');
const { authValidator } = require('../helpers/validate');

const { checkEmail } = require('../helpers/checkEmail');
const router = Router();

router.post('/user/create', authValidator, checkEmail, createUser);

module.exports = router;
