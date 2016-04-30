'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CommentSchema = new Schema({

});

module.exports = mongoose.model('Comment', CommentSchema);