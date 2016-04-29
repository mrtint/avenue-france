'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var VideoSchema = new Schema({
    resource_id: String,
    title: String,
    text: String,
    register_date: Date,
    update_date: Date,
    use_flag: Boolean
});

module.exports = mongoose.model('Video', VideoSchema);