const express = require('express');
const router = express.Router();
const accountController = require('../controller/accountController');

// define routes with controllers
router.get('/login', accountController.login);
router.get('/logout', accountController.logout);

// placeholder
module.exports = router;
