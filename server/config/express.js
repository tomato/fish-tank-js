/**
 * Express configuration
 */

'use strict';

var express = require('express');
var favicon = require('serve-favicon');
var morgan = require('morgan');
var compression = require('compression');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var cookieParser = require('cookie-parser');
var errorHandler = require('errorhandler');
var path = require('path');
var config = require('./environment');
var logger = require("./logger");
var moment = require('moment');
var validate = require('validate.js');

moment.createFromInputFallback = function(config) {
  // unreliable string magic, or
  config._d = new Date(config._i);
};

module.exports = function(app) {
  validate.moment = moment;

  var env = app.get('env');

  app.set('views', config.root + '/server/views');

  app.use(compression());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(methodOverride());
  app.use(cookieParser());
  app.use(morgan({ "stream": logger.stream }));
  app.use(express.static(path.join(config.root, 'client')));
  app.set('appPath', 'client');

  if ('production' === env) {
  }

  if ('development' === env || 'test' === env) {
    app.use(errorHandler()); // Error handler - has to be last
  }
};
