'use strict';

// core modules
import 'angular';
import 'angular-resource';
import 'angular-ui-router';

import tankModule from 'client/app/tank/tank.js';

let mainModule = angular.module('app', [
    // angular modules
    'ui.router',

    // core modules
    tankModule.name
]);

angular.element(document).ready(function() {
    angular.bootstrap(document, [mainModule.name], {
        //strictDi: true
    });
});

export default mainModule;
