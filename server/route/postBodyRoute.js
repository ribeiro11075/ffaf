const express = require('express');
const router = express.Router();
const postBodyController = require('../controller/postBodyController');

// remove if request validation applied at controller
const postBodyValidate = require('../validate/postBodyValidate');
const validate =  require('../validate/validate');

// remove if request validation applied at controller
// omitted schema2 and schema3 based on other methods shown
const schema1 = postBodyValidate.schema1;

// define routes with controllers
// test1 applies middleware to validate user input per schema (remove if not needed)
router.post('/postBody1', validate.validate(schema1), postBodyController.postBodyControllerItem1);
router.post('/postBody2', postBodyController.postBodyControllerItem2);
router.post('/postBody3', postBodyController.postBodyControllerItem3);

// placeholder
module.exports = router;
