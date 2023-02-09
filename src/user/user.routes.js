const { Router } = require('express');
const { createUser } = require('./user.controller');
const router = Router();

router.post('/create', createUser);

module.exports = router;
