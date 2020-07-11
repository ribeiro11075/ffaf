const express = require('express');
const router = express.Router();
const generalController = require('../controller/generalController');

// Define routes with parameters
router.get('/', generalController.home);
router.get('/home', generalController.home);

// Placeholder
module.exports = router;
