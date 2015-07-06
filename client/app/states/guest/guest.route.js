'use strict';

function guestRoute($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/guests');

  $stateProvider
    .state('guests', {
      url: '/guests',
      templateUrl: 'app/states/guest/actions/list/guest.list.view.html',
      controller: 'guestListController as list'
    })
    .state('guests-create', {
      url: '/guests/create',
      templateUrl: 'app/states/guest/actions/create/guest.create.view.html',
      controller: 'guestCreateController as create'
    })
    .state('guests-view', {
			url: '/guests/:guestId',
      templateUrl: 'app/states/guest/actions/view/guest.view.view.html',
      controller: 'guestViewController as view'
		});

}
guestRoute.$inject = ['$stateProvider', '$urlRouterProvider'];

export default guestRoute;
