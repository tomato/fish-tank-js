'use strict';

function tankRoute($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/tank');

  $stateProvider
    .state('tank', {
      url: '/tank',
      templateUrl: 'app/tank/tank.view.html',
      controller: 'tankController as tank'
    });

}
tankRoute.$inject = ['$stateProvider', '$urlRouterProvider'];

export default tankRoute;
