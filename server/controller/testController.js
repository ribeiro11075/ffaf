const database = require('../common/database');
const testModel = require('../model/testModel');
const testValidate = require('../validate/testValidate');

// Placeholder
const schema1 = testValidate.schema1
const schema2 = testValidate.schema2


// Placeholder
exports.testControllerItem1 = async function(req, res, next) {
  const {schema1Field1, schema1Field2} = req.query;

  try {
    await schema1.validate({
      schema1Field1,
      schema1Field2
    });
  } catch (error) {
    return next(error);
  };

  //database.apiUsage(req.params, req.route);
  //database.apiUsage(req.body, req.route);
  res.status(200).send(req.query);
};


// Placeholder
exports.testControllerItem2 = async function(req, res, next) {
  const {schema2Field1, schema2Field2} = req.query;

  try {
    await schema2.validate({
      schema2Field1,
      schema2Field2
    });
  } catch (error) {
    return next(error);
  };

  //database.apiUsage(req.params, req.route);
  //database.apiUsage(req.body, req.route);
  res.status(200).send(req.query);
};
