const express = require('express');
const router = express.Router();
const testController = require('../controller/testController');

// remove if request validation applied at controller
const testValidate = require('../validate/testValidate');
const validate =  require('../validate/validate');

// remove if request validation applied at controller
// omitted schema2 and schema3 based on other methods shown
const schema1 = testValidate.schema1;

// define routes with controllers
// test1 applies middleware to validate user input per schema (remove if not needed)
router.get('/test1', validate(schema1), testController.testControllerItem1);
router.get('/test2', testController.testControllerItem2);
router.get('/test3', testController.testControllerItem3);

// placeholder
module.exports = router;
