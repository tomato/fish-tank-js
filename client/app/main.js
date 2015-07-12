'use strict';

// core modules
import 'angular';
import 'angular-resource';
import 'angular-ui-router';
import tankModule from 'client/app/tank/tank.js';
import Api from 'client/app/services/api.js';

let mainModule = angular.module('app', [
    // angular modules
    'ui.router',


    // core modules
    tankModule.name
]);

mainModule.service('Api', Api);

angular.element(document).ready(function() {
    angular.bootstrap(document, [mainModule.name], {
        //strictDi: true
    });
});

export default mainModule;
