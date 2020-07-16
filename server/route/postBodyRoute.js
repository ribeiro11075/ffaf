const express = require('express');
const router = express.Router();

// placeholder
const postBodyController = require('../controller/postBodyController');
const postBodySchema = require('../schema/postBodySchema');
const validate =  require('../middleware/validate');

// placeholder
const schema1 = postBodySchema.schema1;
const schema2 = postBodySchema.schema2;

// define routes with controllers
// test1 applies middleware to validate user input per schema (remove if not needed)
router.post('/postBody1', validate.validate(schema1), postBodyController.postBodyControllerItem1);
router.post('/postBody2', validate.validate(schema2), postBodyController.postBodyControllerItem2);
router.post('/postBody3', postBodyController.postBodyControllerItem3);

// placeholder
module.exports = router;
