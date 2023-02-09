const { Router } = require('express');
const { createState } = require('./state.controller');
const router = Router();

router.post('/create', createState);

module.exports = router;
