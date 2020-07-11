// database api logging should be applied at middleware layer
const database = require('../common/database');

// placeholder
exports.home = async function(req, res, next) {

  // should be applied at middleware layer
  //database.apiUsage(req);
  res.send('Welcome To The Home Page Baby Girl Helder');
};


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
  res.send('You Can Never Logout Baby Girl Helder');
};
