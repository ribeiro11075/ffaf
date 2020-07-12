const express = require('express');
const router = express.Router();
const getQueryController = require('../controller/getQueryController');

// remove if request validation applied at controller
const getQueryValidate = require('../validate/getQueryValidate');
const validate =  require('../validate/validate');

// remove if request validation applied at controller
// omitted schema2 and schema3 based on other methods shown
const schema1 = getQueryValidate.schema1;

// define routes with controllers
// test1 applies middleware to validate user input per schema (remove if not needed)
router.get('/getQuery1', validate.validate(schema1), getQueryController.getQueryControllerItem1);
router.get('/getQuery2', getQueryController.getQueryControllerItem2);
router.get('/getQuery3', getQueryController.getQueryControllerItem3);

// placeholder
module.exports = router;
