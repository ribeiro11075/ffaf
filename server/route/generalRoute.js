const express = require('express');
const router = express.Router();
const generalController = require('../controller/generalController');

// placeholder
const homeRoute = ['/', '/home']

// define routes with controllers
router.get(homeRoute, generalController.home);
router.get('/about', generalController.about);
router.get('/blog', generalController.blog);
router.get('/contact', generalController.contact);

// placeholder
module.exports = router;
