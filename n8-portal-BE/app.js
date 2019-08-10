const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./restApi/routes/index');
const regRoute = require('./restApi/routes/user');
const config = require('config');
const app = express();
app.use(bodyParser.urlencoded({
     extended: false
}));
app.use(bodyParser.json());
if (!config.get('PrivateKey')) {
     console.error('FATAL ERROR: PrivateKey is not defined.');
     process.exit(1);
}
app.use('/', routes);
app.use('/api/v1', regRoute);
module.exports = app;