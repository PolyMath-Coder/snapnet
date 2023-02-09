const { Router } = require('express');

const router = Router();

router.use('/auth', require('../user/user.routes'));
router.use('/state', require('../states/state.routes'));
router.use('/lga', require('../lga/lga.routes'));

module.exports = router;
