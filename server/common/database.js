const { Pool } = require('pg');

// assign database configuration values
const host = 123
const port = 123
const database = 123
const username = 123
const password = 123
const max = 123

// create PostgreSQL pool of clients for performance
const pool = new Pool({user: username, host: host, database: database, password: password, port: port, max: max});

// create default PostgreSQL pool error
pool.on('error', (err, client) => {
    console.error('Error:', err);
});

// create select query
exports.select = async function(query) {
      try {
          const client = await pool.connect();
          const res = await client.query(query);
          client.release();
          return res.rows;
      } catch (err) {
          console.error(err);
      };
};


// create update/insert query
exports.upsert = async function(query) {
      try {
          const client = await pool.connect();
          const res = await client.query(query);
          client.release();
      } catch (err) {
          console.error(err);
      };
};


// create insert API usage query
exports.apiUsage = async function(parameters, route,user) {
      try {
          const text = 'INSERT INTO apiUsage (employeeID, apiKey, url, parameter) values ($1, $2, $3, $4)';
          const values = [user.employeeID, 'apiKey' in parameters ? parameters.apiKey : null, route.path, parameters];
          query = {'text': text, 'values': values};
          const client = await pool.connect();
          const res = await client.query(query);
          client.release();
      } catch (err) {
          console.error(err);
      };
};
