'use strict';

let GuestViewController = function($stateParams, resources){
    this.guest = resources.GuestResource().get({guestId:$stateParams.guestId});
};

GuestViewController.$inject = ['$stateParams','resources'];
export default GuestViewController;
