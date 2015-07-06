'use strict'

var BPromise = require("bluebird");
var mongoose = BPromise.promisifyAll(require('mongoose'));
var	Schema = mongoose.Schema;
var _ = require("lodash");

var GuestSchema = new Schema({
	name: {
		salutation: String,
		first: String,
		last: { type: String, required: 'Last Name is Required' }
	},
	address: {
		streetAddress: String,
		town: String,
		county: String,
		postcode: String,
	},
	phone: String,
	mobile: String,
	email: String,
	history: { type: Schema.Types.Mixed, default: [] }
},{
    toObject: {
      virtuals: true
    },
    toJSON: {
      virtuals: true
    }
});

GuestSchema.virtual('fullName').get(function() {
	return _.compact([this.name.salutation, this.name.first, this.name.last]).join(' ');
});

GuestSchema.virtual('fullAddress').get(function() {
	return _.compact([
		this.address.streetAddress,
		this.address.town,
		this.address.county,
		this.address.postcode]).join("\n");
});

var Guest = mongoose.model('Guest', GuestSchema);

module.exports = Guest;
