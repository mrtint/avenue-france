'use strict';

var mongoose = require('mongoose'),
    autoIncrement = require('mongoose-auto-increment'),
    Schema = mongoose.Schema;

var LikeSchema = new Schema({
    author: String,
    hashedPassword: String,
    user: Schema.Types.Mixed,
    registerDate: {type: Date, default: Date.now}
});

LikeSchema.plugin(autoIncrement.plugin, 'Like');

module.exports = mongoose.model('Like', LikeSchema);