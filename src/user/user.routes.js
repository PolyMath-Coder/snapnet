const { Router } = require('express');
const { createUser } = require('./user.controller');
const router = Router();

router.post('/user/create', createUser);

module.exports = router;
