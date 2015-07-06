/**
 * Main application file
 */

'use strict';

var express = require('express');
var path = require('path');

// Setup server
var app = express();
var server = require('http').createServer(app);

app.get('/api', function (req, res) {
  res.json(['goldie', 'fishy' ]);
});

app.use(express.static('client'));

app.route('/*')
    .get(function(req, res) {
      res.sendfile(path.resolve('client/index.html'));
    });
// Start server
var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Fish Tank listening at http://%s:%s', host, port);

});

// Expose app
exports = module.exports = app;
