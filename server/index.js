const express = require('express');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const database = require('./common/database')

// placeholder
const generalRoute = require('./route/generalRoute');
const accountRoute = require('./route/accountRoute');
const getQueryRoute = require('./route/getQueryRoute');
const getParamsRoute = require('./route/getParamsRoute');
const postBodyRoute = require('./route/postBodyRoute');
const adminRouter = require('./route/adminRoute');
const publicRouter = require('./route/publicRoute');
const employeeRouter = require('./route/employeeRoute');
const teamRouter = require('./route/teamRoute');
const swaggerRouter = require('./route/swaggerRoute');

// placeholder
const noRoute = require('./middleware/noRoute')
const errorHandler = require('./middleware/errorHandler')

// initialize application
const app = express();

// placeholder
app.use(cors());
app.use(morgan('tiny'));
app.use(bodyParser.json());

// placeholder
app.set('views', path.join(__dirname, 'view'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

// assign routes
app.use('/', generalRoute);
app.use('/', accountRoute);
app.use('/', getQueryRoute);
app.use('/', getParamsRoute);
app.use('/', postBodyRoute);
app.use('/', adminRouter);
app.use('/', publicRouter);
app.use('/', employeeRouter);
app.use('/', teamRouter);
app.use('/', swaggerRouter);

// placeholder
app.get('*', noRoute.noRoute);

// placeholder
app.use(errorHandler.errorHandler);

// assign server configuration
const port = process.env.NODE_PORT;
const host = process.env.NODE_HOST;

// placeholder
app.listen(port, host);
console.log(`Running on http://${host}:${port}`);
