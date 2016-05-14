'use strict';

var mongoose = require('mongoose'),
    autoIncrement = require('mongoose-auto-increment'),
    Schema = mongoose.Schema;

var CommentSchema = new Schema({
    text: String,
    author: String,
    hashedPassword: String,
    user: Schema.Types.Mixed,
    registerDate: {type: Date, default: Date.now},
    updateDate: {type: Date},
    isUse: {type: Boolean, default: true},
    likes: [{type: Number, ref: 'Like'}],
    reports: [{type: Number, ref: 'Report'}]
});

CommentSchema.plugin(autoIncrement.plugin, 'Comment');

module.exports = mongoose.model('Comment', CommentSchema);