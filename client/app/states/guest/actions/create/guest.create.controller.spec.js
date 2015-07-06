'use strict';

import 'angular';
import 'angular-mocks';
import app from 'client/app/main.js';

describe('Guest create controller', function() {
  beforeEach(angular.mock.module(app.name));

  var $controller;
  var createController;
  var $httpBackend;

  beforeEach(inject(function($injector) {
    $controller = $injector.get('$controller');
    $httpBackend = $injector.get('$httpBackend');
    $httpBackend.when('GET', /\.html$/).respond(200);

    createController = function() {
      return $controller('guestCreateController');
    };
  }));

  describe('instantiate', function(){
    it('should have a form', function(){

      var controller = createController();
      expect(controller.fields).toBeDefined();
      $httpBackend.flush();
    });
  });

  describe('save', function() {
    it('should save to the server', function() {
      var controller = createController();

      controller.guest = {
        'name': 'Test McTest'
      };

      $httpBackend.expectPOST('/api/guests', controller.guest)
        .respond(201);

      controller.save();
      $httpBackend.flush();
      expect(controller.message).toBe('Guest Added');
    });

    it('should set form errors', function() {
      var controller = createController();

      $httpBackend.expectPOST('/api/guests', {})
        .respond(400, {
          'message':'Validation failed',
          'name':'ValidationError',
          'errors':{
            'name.last':
              {
                'message':'last name is required.',
                'name':'ValidatorError',
                'path':'name.last',
                'type':'required'
              }
          },
          'level':'error','timestamp':'2015-06-17T17:36:52.033Z'});

      controller.save();
      $httpBackend.flush();

      expect(controller.message).toBe('last name is required.');
    });
  });



  afterEach(function() {
    //Tim - lets discuss this
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

});
