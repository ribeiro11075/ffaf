const database = require('../common/database');


// Retrieve Public Diversity Information
exports.publicDiversity = function(params) {
  const text = "SELECT diversityReportID, diversityPopulationID, diversityPopulationTypeID, ARRAY_AGG(year order by year) as year, ARRAY_AGG(percent order by year) as percent FROM diversity GROUP BY diversityReportID, diversityPopulationID, diversityPopulationTypeID";
  const values = [];
  const query = {text: text, values: values};
  const data = database.select(query);

  return data;
};


// Retrieve Public Job Opening Information
exports.publicJobOpening = function(params) {
  const text = "SELECT * FROM jobOpening";
  const values = [];
  const query = {text: text, values: values};
  const data = database.select(query);

  return data;
};


// Retrieve Public Integration Refresh Information
exports.publicDataRefresh = function(params) {
  const text = "SELECT DISTINCT ON (name) name, finishTimestamp FROM integrationLog WHERE status=true ORDER BY name, finishTimestamp DESC";
  const values = [];
  const query = {text: text, values: values};
  const data = database.select(query);

  return data;
};


// Retrieve Public Employee Setting Option Information
exports.publicSettingOption = function(params) {
  const text = "SELECT A.settingOptionID, A.description, ARRAY_AGG(B.settingOptionValue order by B.settingOptionValue) AS settingOptionValue, ARRAY_AGG(B.description order by B.settingOptionValue) AS settingOptionValueDescription FROM settingOption A LEFT JOIN settingOptionValue B ON A.settingOptionID=B.settingOptionID GROUP BY A.settingOptionID, A.description";
  const values = [];
  const query = {text: text, values: values};
  const data = database.select(query);

  return data;
};


// Retrieve Public External Connection Information
exports.publicExternalConnection = function(params) {
  const text = "SELECT externalConnectionID, description, url FROM externalConnection where active=true";
  const values = [];
  const query = {text: text, values: values};
  const data = database.select(query);

  return data;
};
