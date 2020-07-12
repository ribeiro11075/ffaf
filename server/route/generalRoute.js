const express = require('express');
const router = express.Router();
const generalController = require('../controller/generalController');

// placeholder
const homeRoute = ['/', '/home']

// define routes with controllers
router.get(homeRoute, generalController.home);
router.get('/login', generalController.login);
router.get('/logout', generalController.logout);

// placeholder
module.exports = router;
