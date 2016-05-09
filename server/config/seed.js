/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
// 모델 정보들
var User = require('../api/user/user.model'),
    Comment = require('../api/comment/comment.model'),
    Like = require('../api/like/like.model'),
    Report = require('../api/report/report.model'),
    Video = require('../api/video/video.model');

// 모델별 샘플 데이터들
var userSeed = require('../api/user/user.seed'),
    commentSeed = require('../api/comment/comment.seed'),
    likeSeed = require('../api/like/like.seed'),
    reportSeed = require('../api/report/report.seed'),
    videoSeed = require('../api/video/video.seed');

// 샘플 데이터 생성
User.find({}).remove(function () {
    User.create(userSeed);
});

Comment.find({}).remove(function () {
    Comment.create(commentSeed);
});

Like.find({}).remove(function () {
    Like.create(likeSeed);
});

Report.find({}).remove(function () {
    Report.create(reportSeed);
});

Video.find({}).remove(function () {
    Video.create(videoSeed);
});