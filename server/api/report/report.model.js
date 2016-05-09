'use strict';

var mongoose = require('mongoose'),
    autoIncrement = require('mongoose-auto-increment'),
    Schema = mongoose.Schema;

var ReportSchema = new Schema({
    author: String,
    hashedPassword: String,
    user: Schema.Types.Mixed,
    registerDate: {type: Date, default: Date.now}
});

ReportSchema.plugin(autoIncrement.plugin, 'Report');

module.exports = mongoose.model('Report', ReportSchema);