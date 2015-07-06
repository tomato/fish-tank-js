'use strict';

// core modules
import 'angular';
import 'angular-resource';
import 'angular-ui-router';
import 'angular-formly';
import 'angular-formly-bootstrap';
import 'api-check';
import guestModule from 'client/app/states/guest/guest.js';

let mainModule = angular.module('app', [
    // angular modules
    'ngResource',
    'ui.router',

    // 3rd party modules
    'formly',
    'formlyBootstrap',

    // core modules
    guestModule.name
]);

angular.element(document).ready(function() {
    angular.bootstrap(document, [mainModule.name], {
        //strictDi: true
    });
});

export default mainModule;
