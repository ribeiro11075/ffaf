// database api logging should be applied at middleware layer
// const database = require('../common/database');

// placeholder
exports.login = async function(req, res, next) {

  // should be applied at middleware layer
  //database.apiUsage(req);
  res.send('So You Would Like To Login Baby Girl Helder');
};

// placeholder
exports.logout = async function(req, res, next) {

  // should be applied at middleware layer
  //database.apiUsage(req);
  res.send('So You Would Like To Logout Baby Girl Helder');
};
