'use strict';

var constraints = require('./guest.constraints.js');
var validate = require('validate.js');
var should = require('should');

describe('Guest validator', function() {
  var guest;

  it('should be able to show an error when try to save without name', function(done) {
    guest = {};

    var failure = validate(guest, constraints(guest));

    should.exist(failure);
    should.equal(failure['name.last'].length, 1);
    done();
  });

  describe('history', function() {
    beforeEach(function() {
      guest = {
        name: {
          last: 'Jones'
        },
        history: [{
          type: 'communication',
          method: 'email',
          date: '2014-04-25T01:32:21.196Z'
        }]
      };
    });

    describe('communications', function() {
      it('should accept a valid communication', function(done) {
        var failure = validate(guest, constraints(guest));

        should.not.exist(failure);
        done();
      });

      it('should check required fields', function(done) {
        guest.history.push({
          type: 'communication'
        });

        var failure = validate(guest, constraints(guest));

        should.exist(failure);
        should.equal(failure['history.1.date'].length, 1);
        should.equal(failure['history.1.method'].length, 1);
        done();
      });

      it('should reject an invalid date time', function(done) {
        guest.history[0].date = 'silly date';

        var failure = validate(guest, constraints(guest));

        should.exist(failure);
        should.equal(failure['history.0.date'].length, 1);
        done();
      });
    });
  });
});
