'use strict';

import _ from 'lodash';

let GuestCreateController = function($state, resources, guestForm) {

    let GuestResource = resources.GuestResource();

    this.fields = guestForm;
    this.guest = {};

    this.save = function() {
      this.message = '';
      new GuestResource(this.guest)
        .$save()
        .then(() => this.message = 'Guest Added')
        .catch(err => this.message = _.map(err.data.errors, 'message').join(', '));
      $state.go('guests');
    };

};

GuestCreateController.$inject = ['$state','resources', 'guestForm'];

export default GuestCreateController;
