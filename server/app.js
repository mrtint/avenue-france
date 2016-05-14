/**
 * Main application file
 */

'use strict';

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express'),
    mongoose = require('mongoose'),
    autoIncrement = require('mongoose-auto-increment'),
    config = require('./config/environment');

// Connect to database
mongoose.connect(config.mongo.uri, config.mongo.options);
// console.log(config.mongo.uri);
mongoose.connection.on('error', function (err) {
        console.error('MongoDB connection error: ' + err);
        process.exit(-1);
    }
);

// Auto increment init
autoIncrement.initialize(mongoose.connection);

// Populate DB with sample data
if (config.seedDB) {
    require('./config/seed');
}

// Setup server
var app = express();
var server = require('http').createServer(app);
require('./cors')(app);
require('./config/express')(app);
require('./routes')(app);


// Start server
server.listen(config.port, config.ip, function () {
    console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
});

// Expose app
exports = module.exports = app;
