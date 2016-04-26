/**
 * Created by Hansan on 2016-04-26.
 */
var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.send("comments");
});

module.exports = router;