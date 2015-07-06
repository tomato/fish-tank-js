var _ = require('lodash');

//For specs see guest.constraint.js ;-)
var constraintMapper = function(rules, collectionType){
  return {
    addSubType: function(objectType, constraints){
      return function(item, index) {
        var prefix = collectionType + '.' + index;

        if (item.type === objectType) {
          _.forIn(constraints, function(value, key) {
            rules[prefix + '.' + key] = value;
          });
        }
      };
    }
  };
}

module.exports = constraintMapper;
