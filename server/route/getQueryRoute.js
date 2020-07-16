const express = require('express');
const router = express.Router();

// placeholder
const getQueryController = require('../controller/getQueryController');
const getQuerySchema = require('../schema/getQuerySchema');
const validate =  require('../middleware/validate');

// placeholder
const schema1 = getQuerySchema.schema1;
const schema2 = getQuerySchema.schema2;
const schema3 = getQuerySchema.schema3;

// define routes with controllers
// test1 applies middleware to validate user input per schema (remove if not needed)
router.get('/getQuery1', validate.validate(schema1), getQueryController.getQueryControllerItem1);
router.get('/getQuery2', validate.validate(schema2), getQueryController.getQueryControllerItem2);
router.get('/getQuery3', validate.validate(schema3), getQueryController.getQueryControllerItem3);

// placeholder
module.exports = router;
