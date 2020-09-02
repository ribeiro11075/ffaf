const database = require('../common/database');


// employeeProfile_stg data
exports.docker = function(req, res) {
  const text = "SELECT * from test";
  const values = [];
  const query = {text: text, values: values};
  const data = database.select(query);

  data.then(data => res.status(200).json(data));
};
