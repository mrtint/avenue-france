'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var VideoSchema = new Schema({
    id: Number,
    resourceId: String,
    title: String,
    text: String,
    registerDate: {type: Date, default: Date.now},
    updateDate: {type: Date},
    useFlag: {type: Boolean, default: true},
    comments: [{type: Number, ref: 'Comment'}],
    likes: [{type: Schema.Types.ObjectId, ref: 'Like'}],
    reports: [{type: Schema.Types.ObjectId, ref: 'Report'}]
});

module.exports = mongoose.model('Video', VideoSchema);