const { Router } = require('express');
const { createCitizen } = require('./admin.controller');
const router = Router();

router.post('/create', createCitizen);

module.exports = router;
