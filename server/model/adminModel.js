const database = require('../common/database');


// Retreive Admin Integration Log Information
exports.adminIntegrationLog = function(params) {
  const text = "SELECT DISTINCT ON (name) name, status, startTimestamp, finishTimestamp FROM integrationLog ORDER BY name, startTimestamp DESC";
  const values = [];
  const query = {text: text, values: values};
  const data = database.select(query);

  return data;
};


// Retreive Admin Integration Setting Information
exports.adminIntegrationSetting = function(params) {
  const text = "SELECT integrationSettingID, value FROM integrationSetting where active=true";
  const values = [];
  const query = {text: text, values: values};
  const data = database.select(query);

  return data;
};
