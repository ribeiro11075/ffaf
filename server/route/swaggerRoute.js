const express = require('express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const router = express.Router();

//
const title = 'HRLink API'
const description = 'Documentation To Test/Extract/Validate Data Of Interest To Individuals'
const version = '1.0.0'
const apis = ['./documentation/*.js']

//
const swaggerOptions = {swaggerDefinition: {info: {title: title, description: description, version: version}}, apis: apis};
const swaggerDocs = swaggerJsDoc(swaggerOptions);

//
router.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

module.exports = router;
