const database = require('../common/database');


// Retrieve Team Profile Information
exports.teamProfile = function(params) {
  const text = "";
  const values = [];
  const query = {text: text, values: values};
  const data = database.select(query);

  return data;
};


// Retrieve Team Employee Profile Information
exports.teamProfileEmployee = function(params) {
  const text = "";
  const values = [];
  const query = {text: text, values: values};
  const data = database.select(query);

  return data;
};


// Retrieve Team Performance Information
exports.teamPerformance = function(params) {
  const text = "";
  const values = [];
  const query = {text: text, values: values};
  const data = database.select(query);

  return data;
};


// Retrieve Team Employee Performance Information
exports.teamPerformanceEmployee = function(params) {
  const text = "";
  const values = [];
  const query = {text: text, values: values};
  const data = database.select(query);

  return data;
};


// Retrieve Team PAR Information
exports.teamPar = function(params) {
  const text = "";
  const values = [];
  const query = {text: text, values: values};
  const data = database.select(query);

  return data;
};


// Retrieve Team Employee PAR Information
exports.teamParEmployee = function(params) {
  const text = "";
  const values = [];
  const query = {text: text, values: values};
  const data = database.select(query);

  return data;
};
