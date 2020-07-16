const express = require('express');
const router = express.Router();

// placeholder
const getParamsController = require('../controller/getParamsController');

// define routes with controllers
// test1 applies middleware to validate user input per schema (remove if not needed)
router.get('/getParams/:userID', getParamsController.getParamsControllerItem1);
router.get('/getParams/:userID/:purchaseID', getParamsController.getParamsControllerItem2);

// placeholder
module.exports = router;
