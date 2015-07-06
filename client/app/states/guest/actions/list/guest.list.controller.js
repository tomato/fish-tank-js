'use strict';

let GuestListController = function (resources) {
    this.guests = resources.GuestResource().query();
};

GuestListController.$inject = ['resources'];
export default GuestListController;
