/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');

module.exports = function(app) {

  app.get('/', function (req, res) {
    res.json(['goldie', 'fishy' ]);
  });


};
