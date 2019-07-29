const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./restApi/routes/index');
const regRoute = require('./restApi/routes/user');
const app = express();
app.use(bodyParser.urlencoded({
     extended: false
}));
app.use(bodyParser.json());
app.use('/', routes);
app.use('/api/v1', regRoute);
module.exports = app;