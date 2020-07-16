const express = require('express');
const router = express.Router();

// placeholder
const postBodyController = require('../controller/postBodyController');
const postBodySchema = require('../schema/postBodySchema');
const validateSchema =  require('../middleware/validateSchema');

// placeholder
const schema1 = postBodySchema.schema1;
const schema2 = postBodySchema.schema2;

// define routes with controllers
// test1 applies middleware to validate user input per schema (remove if not needed)
router.post('/postBody1', validateSchema.validateSchema(schema1), postBodyController.postBodyControllerItem1);
router.post('/postBody2', validateSchema.validateSchema(schema2), postBodyController.postBodyControllerItem2);
router.post('/postBody3', postBodyController.postBodyControllerItem3);

// placeholder
module.exports = router;
