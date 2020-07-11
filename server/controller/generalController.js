const database = require('../common/database');

exports.home = async function(req, res, next) {
  //database.apiUsage(req.params, req.route);
  //database.apiUsage(req.body, req.route);
  res.send('Hello Baby Girl Helder');
};
