'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var VideoSchema = new Schema({
    resource_id: String,
    title: String,
    text: String,
    register_date: {type: Date, default: Date.now},
    update_date: {type: Date},
    use_flag: {type: Boolean, default: true},
    comments: [Schema.Types.ObjectId],
    likes: [Schema.Types.ObjectId],
    dislikes: [Schema.Types.ObjectId]
});

module.exports = mongoose.model('Video', VideoSchema);