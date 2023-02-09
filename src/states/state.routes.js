const { Router } = require('express');
const { createState, getStates } = require('./state.controller');
const router = Router();

router.post('/create', createState);

router.get('/all', getStates);

module.exports = router;
