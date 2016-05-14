/**
 * Main application routes
 */

'use strict';

var path = require('path');

module.exports = function (app) {
    // Insert routes below
    // app.use('/api/things', require('./api/thing'));
    app.use('/api/users', require('./api/user'));
    app.use('/api/videos', require('./api/video'));
    app.use('/api/comments', require('./api/comment'));
    app.use('/api/likes', require('./api/like'));
    app.use('/api/reports', require('./api/report'));
    app.use('/auth', require('./auth'));
};
