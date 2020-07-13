// database api logging should be applied at middleware layer
// testValidate should be applied at route if option #1 selected
// lodash should be applied at route if option #1 selected
const database = require('../common/database');
const postBodyValidate = require('../validate/postBodyValidate');
const lodash = require('lodash')

// import validation schemas (schema1 used in middleware in route before controller)
const schema2 = postBodyValidate.schema2;

// potential best way
exports.postBodyControllerItem1 = async function(req, res, next) {

  // should be applied at middleware layer
  //database.apiUsage(req);
  res.status(200).send(req.validateSchemaInput);
};

// likely 2nd best way
exports.postBodyControllerItem2 = async function(req, res, next) {
  initialSchemaInput = lodash.pick(req.body, schema2._nodes)

  try {
    validateSchemaInput = await schema2.validate(initialSchemaInput);
  } catch (error) {
    return next(error);
  };

  // should be applied at middleware layer
  //database.apiUsage(req);
  res.status(200).send(validateSchemaInput);
};


// example post request
exports.postBodyControllerItem3 = async function(req, res, next) {

  res.status(200).send({'message':'Works!'});
};
