'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var LikeSchema = new Schema({

});

module.exports = mongoose.model('Like', LikeSchema);