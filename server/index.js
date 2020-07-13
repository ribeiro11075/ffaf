const express = require('express');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');

// placeholder
const generalRoute = require('./route/generalRoute');
const getQueryRoute = require('./route/getQueryRoute');
const getParamsRoute = require('./route/getParamsRoute');
const postBodyRoute = require('./route/postBodyRoute');


// initialize application
const app = express();

// placeholder
app.use(cors());
app.use(morgan('tiny'));
app.use(bodyParser.json());

// placeholder
app.use(express.static(path.join(__dirname, 'public')));

// assign routes
app.use('/', generalRoute);
app.use('/', getQueryRoute);
app.use('/', getParamsRoute);
app.use('/', postBodyRoute);

// placeholder
app.get('*', function(req, res, next) {
  let err = new Error('Page Not Found');
  err.statusCode = 404;
  next(err);
});

// placeholder
app.use(function (err, req, res, next) {
  res.json({err: err});
});

// assign server configuration
const port = process.env.PORT || 8080;
const host = process.env.HOST || '0.0.0.0';

// placeholder
app.listen(port, host);
console.log(`Running on http://${host}:${port}`);
