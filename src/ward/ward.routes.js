const { Router } = require('express');
const { createWard } = require('../ward/ward.controller');
const router = Router();
router.post('/create', createWard);

module.exports = router;
