var _ = require('lodash');
var ConstraintMapper = require('../../components/constraintMapper')

var communicationConstraints = {
  date: {
    presence: true,
    datetime: true
  },
  method: {
    presence: true
  }
};

var guestConstraints = function(guest) {

  var rules = {
    'name.last': {
        presence: true
    }
  };

  if(guest.history) {
    var mapper = new ConstraintMapper(rules, 'history');
    guest.history.forEach(mapper.addSubType('communication',communicationConstraints));
  }

  return rules;
};

module.exports = guestConstraints;
