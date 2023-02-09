const { Router } = require('express');
const { createWard, getWards } = require('../ward/ward.controller');
const router = Router();

router.post('/create', createWard);
router.get('/all', getWards);

module.exports = router;
