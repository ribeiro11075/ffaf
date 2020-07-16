// database api logging should be applied at middleware layer
// const database = require('../common/database');

// potential best way
exports.postBodyControllerItem1 = async function(req, res, next) {

  // should be applied at middleware layer
  //database.apiUsage(req);
  res.status(200).send(req.validateSchemaInput);
};

// likely 2nd best way
exports.postBodyControllerItem2 = async function(req, res, next) {

  // should be applied at middleware layer
  //database.apiUsage(req);
  res.status(200).send(req.validateSchemaInput);
};

// example post request
exports.postBodyControllerItem3 = async function(req, res, next) {

  res.status(200).send({'message':'Works!'});
};
