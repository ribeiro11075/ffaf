const express = require('express');
const router = express.Router();
const generalController = require('../controller/generalController');

// define routes with controllers
router.get(['/', '/home'], generalController.home);
router.get('/login', generalController.login);
router.get('/logout', generalController.logout);

// placeholder
module.exports = router;
