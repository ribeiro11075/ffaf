const userModel = require('../model/userModel');
const database = require('../common/database');


// employeeProfile_stg data
exports.employeeProfile = function(req, res) {
  database.apiUsage(req);
  res.status(200).json(req.params);
};


// Performance data
exports.employeePerformance = function(req, res) {
  database.apiUsage(req.params, req.route);
  res.status(200).json(req.params);
};


// Performance item data
exports.employeePerformanceItem = function(req, res) {
  database.apiUsage(req.params, req.route);
  res.status(200).json(req.params);
};


// PAR data
exports.employeePar = function(req, res) {
  database.apiUsage(req.params, req.route);
  res.status(200).json(req.params);
};


// PAR item data
exports.employeeParItem = function(req, res) {
  database.apiUsage(req.params, req.route);
  res.status(200).json(req.params);
};


// Transaction data
exports.employeeTransaction = function(req, res) {
  database.apiUsage(req.params, req.route);
  res.status(200).json(req.params);
};


// Transaction item data
exports.employeeTransactionItem = function(req, res) {
  database.apiUsage(req.params, req.route);
  res.status(200).json(req.params);
};


// Approval workflow data
exports.employeeApproval = function(req, res) {
  database.apiUsage(req.params, req.route);
  res.status(200).json(req.params);
};


// Approval workflow item data
exports.employeeApprovalItem = function(req, res) {
  database.apiUsage(req.params, req.route);
  res.status(200).json(req.params);
};


// Security data
exports.employeeSecurity = function(req, res) {
  database.apiUsage(req.params, req.route);
  userModel.employeeSecurity(req.params).then(data => res.status(200).json(data));
};

// Setting data
exports.employeeSetting = function(req, res) {
  database.apiUsage(req.params, req.route);
  userModel.employeeSetting(req.params).then(data => res.status(200).json(data));
};

// Update Setting data
exports.employeeUpdateSetting = function(req, res) {
  database.apiUsage(req.body, req.route);
  userModel.employeeUpdateSetting(req.body);
  res.end();
};

// Rating data
exports.employeeRating = function(req, res) {
  database.apiUsage(req.params, req.route, req.user);
  userModel.employeeRating(req.params,req.user).then(data => res.status(200).json(data));
};

// Submit rating data
exports.employeeSubmitRating = function(req, res) {
  database.apiUsage(req.body, req.route, req.user);
  userModel.employeeSubmitRating(req.body,req.user);
  res.end();
};

// Alert data
exports.employeeAlert = function(req, res) {
  database.apiUsage(req.params, req.route);
  userModel.employeeAlert(req.params,req.user).then(data => res.status(200).json(data));
};

// Close alert data
exports.employeeRemoveAlert = function(req, res) {
  database.apiUsage(req.body, req.route);
  userModel.employeeRemoveAlert(req.body);
  res.end();
};
