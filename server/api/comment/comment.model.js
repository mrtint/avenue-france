'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CommentSchema = new Schema({
    id: Number,
    text: String,
    email: String,
    hashedPassword: String,
    user: Schema.Types.Mixed,
    registerDate: {type: Date, default: Date.now},
    updateDate: {type: Date},
    useFlag: {type: Boolean, default: true},
    likes: [{type: Schema.Types.ObjectId, ref: 'Like'}],
    reports: [{type: Schema.Types.ObjectId, ref: 'Report'}]
});

module.exports = mongoose.model('Comment', CommentSchema);