const { Router } = require('express');
const { createLGA, getLGAs } = require('./lga.controller');
const router = Router();

router.post('/create', createLGA);

router.get('/all', getLGAs);

module.exports = router;
