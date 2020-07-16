// database api logging should be applied at middleware layer
// const database = require('../common/database');

// placeholder
exports.home = async function(req, res, next) {

  // should be applied at middleware layer
  //database.apiUsage(req);
  res.render('home', {page:'Home', menuId:'home'});
};

// placeholder
exports.about = async function(req, res, next) {

  // should be applied at middleware layer
  //database.apiUsage(req);
  res.render('about', {page:'About', menuId:'about'});
};

// placeholder
exports.blog = async function(req, res, next) {

  // should be applied at middleware layer
  //database.apiUsage(req);
  res.render('blog', {page:'Blog', menuId:'blog'});
};

// placeholder
exports.contact = async function(req, res, next) {

  // should be applied at middleware layer
  //database.apiUsage(req);
  res.render('contact', {page:'Contact', menuId:'contact'});
};
