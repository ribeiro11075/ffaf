const adminModel = require('../model/adminModel');
const database = require('../common/database');


// Integration Logs data
exports.adminIntegrationLog = function(req, res) {
  database.apiUsage(req);
  adminModel.adminIntegrationLog(req.params).then(data => res.status(200).json(data));
};

// Integration Settings data
exports.adminIntegrationSetting = function(req, res) {
  database.apiUsage(req);
  adminModel.adminIntegrationSetting(req.params).then(data => res.status(200).json(data));
};
