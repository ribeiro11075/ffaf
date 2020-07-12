// database api logging should be applied at middleware layer
// testValidate should be applied at route if option #1 selected
// lodash should be applied at route if option #1 selected
const database = require('../common/database');
const testModel = require('../model/testModel');
const lodash = require('lodash')

// placeholder
exports.getParamsControllerItem1 = async function(req, res, next) {

  // should be applied at middleware layer
  //database.apiUsage(req);
  res.status(200).send(req.params);
};

// placeholder
exports.getParamsControllerItem2 = async function(req, res, next) {

  // should be applied at middleware layer
  //database.apiUsage(req);
  res.status(200).send(req.params);
};
