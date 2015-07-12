'use strict';

import 'angular';
import 'angular-mocks';
import app from 'client/app/main.js';

describe('Tank controller', function() {
  beforeEach(angular.mock.module(app.name));

  var $controller;
  var createController;
  var FakeApi = function(){
    return {
      get: function(url){
        console.debug('param was' + url)  ;
        switch (url) {
          case '/api':
            return Promise.resolve(['tim', 'tom']);
          case '/api/tim':
            return Promise.resolve({ needs: 1});
          case '/api/tom':
            return Promise.resolve({needs: 5});
          default:
            throw 'unmatched url was' + url;
          }
      }
    };
  };

  beforeEach(inject(function($injector) {

    $controller = $injector.get('$controller');

    createController = function(fakeApi) {
      return $controller('tankController', { Api: fakeApi, $scope: { $apply: c => c() }});
    };
  }));

  describe('instantiate', function(){
    it('should calculate feed', function(done){

      var fakeApi = new FakeApi();

      var controller = createController(fakeApi);
      setTimeout(() => {
        expect(controller.feed).toBe(6);
        done();
      },0);
    });

  });
});
