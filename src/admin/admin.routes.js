const { Router } = require('express');
const { createCitizen } = require('./admin.controller');
const { userAuthentication, adminAuthorization } = require('../helpers/auth');
const router = Router();

router.post('/create', userAuthentication, adminAuthorization, createCitizen);

module.exports = router;
