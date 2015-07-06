'use strict';

var express = require('express');
var controller = require('./tank.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/goldie', controller.goldie);
router.get('/fishy', controller.fishy);



module.exports = router;
