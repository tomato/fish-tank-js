'use strict';

let Api = function($http){
  return {
    get: function(url){
      return new Promise(function(resolve, reject){
        $http.get('/api/' + url)
        .success(resolve)
        .error(reject);
      });
    }
  };
};

Api.$inject = ['$http'];

export default Api;
