'use strict';

import 'angular';
import 'angular-mocks';
import app from 'client/app/main.js';

describe('Tank controller', function() {
  beforeEach(angular.mock.module(app.name));

  var $controller;
  var createController;
  var $httpBackend;

  beforeEach(inject(function($injector) {
    $controller = $injector.get('$controller');
    $httpBackend = $injector.get('$httpBackend');

    createController = function() {
      return $controller('tankController');
    };
  }));

  describe('instantiate', function(){
    it('should have some fish', function(){

      $httpBackend.expectGET('/api')
        .respond(200, [
          'fred',
          'george'
        ]);

      var controller = createController();
      $httpBackend.flush();
      expect(controller.fish.length).toBe(2);
    });
  });
});
