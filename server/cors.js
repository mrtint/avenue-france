/**
 * CORS filter
 */

'use strict';

var cors = require('express-cors');

module.exports = function (app) {
    app.use(cors({
        allowedOrigins: [
            'localhost:8080'
        ]
    }))
}