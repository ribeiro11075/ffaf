// database api logging should be applied at middleware layer
// const database = require('../common/database');


// potential best way
exports.getQueryControllerItem1 = async function(req, res, next) {

  // should be applied at middleware layer
  //database.apiUsage(req);
  res.status(200).send(req.validateSchemaInput);
};

// likely 2nd best way
exports.getQueryControllerItem2 = async function(req, res, next) {

  // should be applied at middleware layer
  //database.apiUsage(req);
  res.status(200).send(req.validateSchemaInput);
};

// likely 3rd best way
exports.getQueryControllerItem3 = async function(req, res, next) {

  // should be applied at middleware layer
  //database.apiUsage(req);
  res.status(200).send(req.validateSchemaInput);
};
