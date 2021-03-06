'use strict';

var mongoose = require('mongoose'),
    autoIncrement = require('mongoose-auto-increment'),
    Schema = mongoose.Schema;

var VideoSchema = new Schema({
    resourceId: String,
    type: String,
    title: String,
    text: String,
    author: String,
    hashedPassword: String,
    user: Schema.Types.Mixed,
    registerDate: {type: Date, default: Date.now},
    updateDate: {type: Date},
    isUse: {type: Boolean, default: true},
    comments: [{type: Number, ref: 'Comment'}],
    likes: [{type: Number, ref: 'Like'}],
    reports: [{type: Number, ref: 'Report'}]
});

VideoSchema.plugin(autoIncrement.plugin, 'Video');

module.exports = mongoose.model('Video', VideoSchema);