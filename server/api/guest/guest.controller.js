'use strict';
var Guest = require('./guest.model');
var _ = require('lodash');
var logger = require('../../config/logger');
var BPromise = require('Bluebird');

exports.show = function(req, res, next) {
  sendResponse(
    Guest.findByIdAsync(req.params.id),
    res,
    200
  );
};

exports.index = function(req, res) {
  Guest.findAsync()
    .then(function (guests) {
      return res.json(200, guests);
    })
    .catch(function(err) { handleError(res, err); });
};

exports.create = function(req, res) {
  sendResponse(
    Guest.createAsync(req.body),
    res,
    201
  );
};

// Updates an existing thing in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }

  var promise = Guest.findByIdAsync(req.params.id)
    .then(function (guest) {
        return guest && _.merge(guest, req.body).saveAsync();
    });
  sendResponse(promise, res, 200);
};

// Deletes a thing from the DB.
exports.destroy = function(req, res) {
  Guest.findByIdAsync(req.params.id)
    .then(function (guest) {
      return guest && guest.removeAsync()
    })
    .then(function(guest) {
      return guest ?
        res.send(204):
        res.send(404);
    })
    .catch(function(err) { handleError(res, err); });
};

function sendResponse(promise, res, successCode)
{
  promise.then(
    function(model){
      handleSuccess(res, model, successCode);
    },
    function(err){
      handleError(res, err);
    }
  );
}

function handleError(res, err) {
  if(err.name === 'ValidationError')
    return res.send(400, err);
  else{
    logger.error(err);
    return res.send(500, err);
  }
}

function handleSuccess(res, model, successCode)
{
    return model ?
      res.json(successCode, model) :
      res.send(404);
}
