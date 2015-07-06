'use strict';

import 'angular';
import 'angular-mocks';
import app from 'client/app/main.js';

describe('Guest view controller', function() {
  beforeEach(angular.mock.module(app.name));

  var $controller;
  var createController;
  var $httpBackend;

  beforeEach(inject(function($injector) {
    $controller = $injector.get('$controller');
    $httpBackend = $injector.get('$httpBackend');

    createController = function(stateParams = {}) {
      return $controller('guestViewController', {$stateParams:stateParams});
    };
  }));

  describe('instantiate', function(){
    it('should get a guest', function(){

      $httpBackend.expectGET('/api/guests/1')
        .respond(200, { name: { last: 'Fred'}});

      var controller = createController({ guestId:1});
      $httpBackend.flush();
      expect(controller.guest.name.last).toBe('Fred');
    });
  });
});
