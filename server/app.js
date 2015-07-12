/**
 * Main application file
 */

'use strict';

var express = require('express');
var path = require('path');

// Setup server
var app = express();
var server = require('http').createServer(app);
var fishes = [
  { name: 'Goldie', needs: 2, message: 'Please clean my tank'},
  { name: 'Fishy', needs: 3, message: 'I\'m Hank Marvin'},
  { name: 'Fred', needs: 2, message: 'zzzzzzz'},
];

app.get('/api/cat', function (req, res) {
  res.json(fishes.map(f => f.name));
});

app.get('/api/:id', function(req, res){
  setTimeout(function(){
      res.json(fishes.find(f => req.params.id === f.name));
    }, Math.random() * 1000);
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
