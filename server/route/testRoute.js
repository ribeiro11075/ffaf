const express = require('express');
const router = express.Router();
const testController = require('../controller/testController');

// Define routes with parameters
router.get('/test1', testController.testControllerItem1);
router.get('/test2', testController.testControllerItem2);

// Placeholder
module.exports = router;
