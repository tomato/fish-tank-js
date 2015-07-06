'use strict';

import 'angular';
import 'angular-mocks';
import app from 'client/app/main.js';

describe('Guest list controller', function() {
  beforeEach(angular.mock.module(app.name));

  var $controller;
  var createController;
  var $httpBackend;

  beforeEach(inject(function($injector) {
    $controller = $injector.get('$controller');
    $httpBackend = $injector.get('$httpBackend');

    createController = function() {
      return $controller('guestListController');
    };
  }));

  describe('instantiate', function(){
    it('should have a list of Guests', function(){

      $httpBackend.expectGET('/api/guests')
        .respond(200, [
          { name: { last: 'Fred'}},
          { name: { last: 'George'}}
        ]);

      var controller = createController();
      $httpBackend.flush();
      expect(controller.guests.length).toBe(2);
    });
  });
});
