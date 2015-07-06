'use strict';

var should = require('should'),
	mongoose = require('mongoose'),
  Guest = require('./guest.model.js');

describe('Guest Model', function() {
  var guest;

	beforeEach(function(done) {
			guest = new Guest({
				name: {last: 'Guest Name'},
			});
			done();
	});

	describe('Method Save', function() {
		it('should be able to save without problems', function(done) {
			return guest.saveAsync()
        .then(function() {
  				should.exist(guest._id);
  				done();
  			});
		});
  });

	describe('fullName', function() {
		it('should return the full name of the guest', function() {
			var guest = new Guest({
				name: {
					salutation: 'Mr',
					first: 'Joe',
					last: 'Bloggs'
				}
			});
      guest.fullName.should.equal('Mr Joe Bloggs');
		});

		it('should handle no sulatation or first name', function() {
			var guest = new Guest({
				name: {
					last: 'Bloggs'
				}
			});
      guest.fullName.should.equal('Bloggs');
		});
	});

  describe('fullAddress', function(){
    it('should concat address fields with new lines', function(){
      var guest = new Guest({
        address: {
           streetAddress: "42 the grove\nthe lane",
           town: 'Amsterdam',
           county: 'A County',
           postcode: 'PE34 9QQ'
        }
      });
      guest.fullAddress.should.equal("42 the grove\nthe lane\nAmsterdam\nA County\nPE34 9QQ");
    });
  });

	afterEach(function(done) {
		Guest.remove().exec();
		done();
	});
});
