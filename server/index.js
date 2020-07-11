const express = require('express');
const testRoute = require('./route/testRoute');
const generalRoute = require('./route/generalRoute');

// Assign server configuration
const port = 8080;
const host = '0.0.0.0';

// Initialize application
const app = express();

// Assign Routes
app.use('/', generalRoute);
app.use('/', testRoute);

// Placeholder
app.get('*', function(req, res, next) {
  let err = new Error('Page Not Found');
  err.statusCode = 404;
  next(err);
});

// Placeholder
app.use(function (err, req, res, next) {
  res.json({err: err});
});

// Placeholder
app.listen(port, host);
console.log(`Running on http://${host}:${port}`);
