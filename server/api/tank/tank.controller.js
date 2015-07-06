'use strict';

exports.goldie = function(req, res, next) {
  sendResponse(
    { feed: 2},
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

e
