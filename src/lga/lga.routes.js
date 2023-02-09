const { Router } = require('express');
const { createLGA } = require('./lga.controller');
const router = Router();

router.post('/create', createLGA);

module.exports = router;
