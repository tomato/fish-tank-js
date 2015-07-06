'use strict';

import guestRoute from './guest.route.js';

import GuestListController from './actions/list/guest.list.controller.js';
import GuestCreateController from './actions/create/guest.create.controller.js';
import GuestViewController from './actions/view/guest.view.controller.js';

import guestForm from './services/guestForm.js';
import Resources from '../../common/resources.js';

export default angular.module('app.guest', [])
  .config(guestRoute)
  //Controllers
  .controller('guestListController', GuestListController)
  .controller('guestCreateController', GuestCreateController)
  .controller('guestViewController', GuestViewController)
  //Services
  .service('resources', Resources)
  //Forms
  .value('guestForm', guestForm);
