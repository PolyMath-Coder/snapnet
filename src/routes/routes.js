const { Router } = require('express');

const router = Router();

router.use('/user', require('../user/user.routes'));

module.exports = router;
