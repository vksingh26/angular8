require('dotenv').config();
const mongoose = require('mongoose');
// comment from line 5 to line 14 to start debugging
mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise;
mongoose.connection
    .on('connected', () => {
        console.log(`Mongoose connection open on ${process.env.DATABASE}`);
    })
    .on('error', (err) => {
        console.log(`Connection error: ${err.message}`);
    });

const app = require('./app');
const server = app.listen(3000, () => {
    console.log(`Express is running on port ${server.address().port}`);
});