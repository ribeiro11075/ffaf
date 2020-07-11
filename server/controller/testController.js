// database api logging should be applied at middleware layer
// testValidate should be applied at route if option #1 selected
// lodash should be applied at route if option #1 selected
const database = require('../common/database');
const testModel = require('../model/testModel');
const testValidate = require('../validate/testValidate');
const lodash = require('lodash')

// import validation schemas (schema1 used in middleware in route before controller)
const schema2 = testValidate.schema2;
const schema3 = testValidate.schema3;

// potential best way
exports.testControllerItem1 = async function(req, res, next) {

  // should be applied at middleware layer
  //database.apiUsage(req);
  res.status(200).send(req.validateSchemaInput);
};

// likely 2nd best way
exports.testControllerItem2 = async function(req, res, next) {
  initialSchemaInput = lodash.pick(req.query, schema2._nodes)

  try {
    validateSchemaInput = await schema2.validate(initialSchemaInput);
  } catch (error) {
    next(error);
  };

  // should be applied at middleware layer
  //database.apiUsage(req);
  res.status(200).send(validateSchemaInput);
};

// likely 3rd best way
exports.testControllerItem3 = async function(req, res, next) {
  const {schema3Field1, schema3Field2} = req.query;

  try {
    validateSchemaInput = await schema3.validate({
      schema3Field1,
      schema3Field2
    });
  } catch (error) {
    return next(error);
  };

  // should be applied at middleware layer
  //database.apiUsage(req);
  res.status(200).send(validateSchemaInput);
};
