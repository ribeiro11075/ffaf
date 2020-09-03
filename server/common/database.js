const { Pool } = require('pg');

// assign database configuration values
const host = process.env.POSTGRES_HOST
const port = process.env.POSTGRES_PORT
const username = process.env.POSTGRES_USER
const password = process.env.POSTGRES_PASSWORD
const database = process.env.POSTGRES_DB
const max = process.env.POSTGRES_MAX_CONNECTIONS

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


// create upsert query
exports.upsert = async function(query) {
      try {
          const client = await pool.connect();
          const res = await client.query(query);
          client.release();
      } catch (err) {
          console.error(err);
      };
};


// create insert query to track usage
exports.apiUsage = async function(req) {
      try {
          const text = 'INSERT INTO apiUsage (apiKey, url, parameters) values ($1, $2, $3)';
          const url = req.route.path;
          const method = req.method.toLowerCase();
          const parameters = {};

          if (method == 'get') {
            parameters = req.query;
          } else if (method == 'post') {
            parameters = req.body;
          };

          const values = ['apiKey' in parameters ? parameters.apiKey : null, url, parameters];
          const query = {'text': text, 'values': values};
          const client = await pool.connect();
          const res = await client.query(query);
          client.release();
      } catch (err) {
          console.error(err);
      };
};
