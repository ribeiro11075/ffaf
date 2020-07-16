// database api logging should be applied at middleware layer
// const database = require('../common/database');

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
