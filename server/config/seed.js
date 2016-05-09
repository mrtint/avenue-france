/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
// 모델 정보들
var User = require('../api/user/user.model');
var Comment = require('../api/comment/comment.model');
var Like = require('../api/like/like.model');
var Report = require('../api/report/report.model');
var Video = require('../api/video/video.model');

// 모델별 샘플 데이터들
var userSeed = require('../api/user/user.model');
var commentSeed = require('../api/comment/comment.model');
var likeSeed = require('../api/like/like.model');
var reportSeed = require('../api/report/report.model');
var videoSeed = require('../api/video/video.model');

// 샘플 데이터 생성
User.find({}).remove(function () {
    Thing.create(userSeed);
});

Comment.find({}).remove(function () {
    Thing.create(commentSeed);
});

Like.find({}).remove(function () {
    Thing.create(likeSeed);
});

Report.find({}).remove(function () {
    Thing.create(reportSeed);
});

Video.find({}).remove(function () {
    Thing.create(videoSeed);
});