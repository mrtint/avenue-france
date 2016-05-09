/**
 * Created by Hansan on 2016-04-28.
 */
'use strict';

var express = require('express');
var controller = require('./report.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;