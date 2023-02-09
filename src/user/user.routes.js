const { Router } = require('express');
const { createUser } = require('./user.controller');
const { checkEmail } = require('../helpers/checkEmail');
const router = Router();

router.post('/user/create', checkEmail, createUser);

module.exports = router;
