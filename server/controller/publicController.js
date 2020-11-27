const publicModel = require('../model/publicModel');
const database = require('../common/database');


// Diversity data
exports.publicDiversity = function(req, res) {
  database.apiUsage(req.params, req.route);
  publicModel.publicDiversity(req.params).then(data => res.status(200).json(data));
};

// Job opening data
exports.publicJobOpening = function(req, res) {
  database.apiUsage(req.params, req.route);
  publicModel.publicJobOpening(req.params).then(data => res.status(200).json(data));
};

// Integration Log Success data
exports.publicDataRefresh = function(req, res) {
  database.apiUsage(req.params, req.route);
  publicModel.publicDataRefresh(req.params).then(data => res.status(200).json(data));
};

// Setting Options data
exports.publicSettingOption = function(req, res) {
  database.apiUsage(req.params, req.route);
  publicModel.publicSettingOption(req.params).then(data => res.status(200).json(data));
};

// Environment Connections data
exports.publicExternalConnection = function(req, res) {
  database.apiUsage(req.params, req.route);
  publicModel.publicExternalConnection(req.params).then(data => res.status(200).json(data));
};
