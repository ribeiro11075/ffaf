const database = require('../common/database');


// Retreive User Profile Information
exports.employeeProfile = function(params) {
  const text = "";
  const values = [];
  const query = {text: text, values: values};
  const data = database.select(query);

  return data;
};


// Retreive User Performance Information
exports.employeePerformance = function(params) {
  const text = "";
  const values = [];
  const query = {text: text, values: values};
  const data = database.select(query);

  return data;
};


// Retreive User Performance Item Information
exports.employeePerformanceItem = function(params) {
  const text = "";
  const values = [];
  const query = {text: text, values: values};
  const data = database.select(query);

  return data;
};


// Retreive User PAR Information
exports.employeePar = function(params) {
  const text = "";
  const values = [];
  const query = {text: text, values: values};
  const data = database.select(query);

  return data;
};


// Retreive User PAR Item Information
exports.employeeParItem = function(params) {
  const text = "";
  const values = [];
  const query = {text: text, values: values};
  const data = database.select(query);

  return data;
};


// Retrieve User Transaction Information
exports.employeeTransaction = function(params) {
  const text = "";
  const values = [];
  const query = {text: text, values: values};
  const data = database.select(query);

  return data;
};


// Retrieve User Transaction Item Information
exports.employeeTransactionItem = function(params) {
  const text = "";
  const values = [];
  const query = {text: text, values: values};
  const data = database.select(query);

  return data;
};


// Retrieve User Approval Information
exports.employeeApproval = function(params) {
  const text = "";
  const values = [];
  const query = {text: text, values: values};
  const data = database.select(query);

  return data;
};


// Retrieve User Approval Item Information
exports.employeeApprovalItem = function(params) {
  const text = "";
  const values = [];
  const query = {text: text, values: values};
  const data = database.select(query);

  return data;
};


// Retrieve User Security Information
exports.employeeSecurity = function(params) {
  const text = "SELECT B.securityRoleID, ARRAY_AGG(D.securityPermissionID) as securityRolePermission FROM securityEmployeeRole A LEFT JOIN securityRole B ON A.securityRoleID=B.securityRoleID LEFT JOIN securityRolePermission C ON B.securityRoleID=C.securityRoleID LEFT JOIN securityPermission D ON C.securityPermissionID=D.securityPermissionID WHERE LOWER(A.employeeID)=$1 GROUP BY B.securityRoleID";
  const values = [params.employeeID.toLowerCase()];
  const query = {text: text, values: values};
  const data = database.select(query);

  return data;
};


// Retrieve User Setting Information
exports.employeeSetting = function(params) {
  const text = "SELECT settingOptionID, settingOptionValue FROM employeeSetting WHERE LOWER(employeeID)=$1";
  const values = [params.employeeID.toLowerCase()];
  const query = {text: text, values: values};
  const data = database.select(query);

  return data;
};


// Update User Setting
exports.employeeUpdateSetting = function(body) {
  for (key in body.settingOptions){
    const text = "INSERT INTO employeeSetting (employeeID, settingOptionID, settingOptionValue, createBy, updateBy) VALUES ($1, $2, $3, $1, $1) ON CONFLICT (employeeID, settingOptionID) DO UPDATE SET settingOptionValue=$3, updateBY=$1, updateTimestamp=NOW()";
    const values = [body.employeeID.toLowerCase(), body.settingOptions[key].settingOption.toLowerCase(), body.settingOptions[key].settingOptionValue.toLowerCase()];
    const query = {text: text, values: values};
    database.upsert(query);
  };
};


// Retrieve User Rating Information
exports.employeeRating = function(params, user) {
  const text = "SELECT A.ratingOptionID, A.score FROM employeeRating A LEFT JOIN ratingOption B ON A.ratingOptionID=B.ratingOptionID WHERE LOWER(employeeID)=$1 and B.active=true";
  const values = [user.employeeID.toLowerCase()];
  const query = {text: text, values: values};
  const data = database.select(query);

  return data;
};


// Submit User Rating
exports.employeeSubmitRating = function(body,user) {
  const text = "INSERT INTO employeeRating (employeeID, ratingOptionID, score, createBy, updateBy) VALUES ($1, $2, $3, $1, $1) ON CONFLICT (employeeID, ratingOptionID) DO UPDATE SET score=$3, updateBY=$1, updateTimestamp=NOW()";
  const values = [user.employeeID.toLowerCase(), body.ratingOptionID.toLowerCase(), parseInt(body.score)];
  const query = {text: text, values: values};
  database.upsert(query);
};


// Retrieve User Alert Information
exports.employeeAlert = function(params) {
  const text = "SELECT employeeAlertID, description FROM employeeAlert WHERE LOWER(employeeID)=$1 AND active=true";
  const values = [params.employeeID.toLowerCase()];
  const query = {text: text, values: values};
  const data = database.select(query);

  return data;
};


// Remove User Alert
exports.employeeRemoveAlert = function(body) {
  const text = "UPDATE employeeAlert SET active=False, updateBy=$1, updateTimestamp=NOW() WHERE LOWER(employeeID)=$1 AND employeeAlertID=$2";
  const values = [body.employeeID.toLowerCase(), body.employeeAlertID.toLowerCase()];
  const query = {text: text, values: values};
  database.upsert(query);
};
