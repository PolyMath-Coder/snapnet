const { Router } = require('express');
const { userAuthentication, adminAuthorization } = require('../helpers/auth');

const router = Router();

router.use('/auth', require('../user/user.routes'));
router.use('/state', require('../states/state.routes'));
router.use('/lga', require('../lga/lga.routes'));
router.use('/ward', require('../ward/ward.routes'));
router.use(
  '/citizen',
  userAuthentication,
  adminAuthorization,
  require('../admin/admin.routes')
);

module.exports = router;
