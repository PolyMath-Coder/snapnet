const { Router } = require('express');
const {
  createCitizen,
  getCitizens,
  searchUser,
} = require('./admin.controller');
const { userAuthentication, adminAuthorization } = require('../helpers/auth');
const router = Router();

router.post('/create', userAuthentication, adminAuthorization, createCitizen);

router.get('/all/citizens', getCitizens);

router.get('/search/user', searchUser);

module.exports = router;
