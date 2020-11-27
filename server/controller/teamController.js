const teamModel = require('../model/teamModel');
const database = require('../common/database');


// Team bio data
exports.teamProfile = function(req, res) {
  database.apiUsage(req.params, req.route);
  res.status(200).json(req.params);
};


// Employee bio data
exports.teamProfileEmployee = function(req, res) {
  database.apiUsage(req.params, req.route);
  res.status(200).json(req.params);
};


// Team performance data
exports.teamPerformance = function(req, res) {
  database.apiUsage(req.params, req.route);
  res.status(200).json(req.params);
};


// Employee performance data
exports.teamPerformanceEmployee = function(req, res) {
  database.apiUsage(req.params, req.route);
  res.status(200).json(req.params);
};


// Team par data
exports.teamPar = function(req, res) {
  database.apiUsage(req.params, req.route);
  res.status(200).json(req.params);
};


// Employee par data
exports.teamParEmployee = function(req, res) {
  database.apiUsage(req.params, req.route);
  res.status(200).json(req.params);
};
