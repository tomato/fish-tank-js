'use strict';

let TankController = function ($http) {
    var self = this;
    console.log('yo controller');

    $http.get('/api')
      .success(function(data){
      console.log('yo data');

      self.fish = data;
    })
    .error(function(err){ console.log('yo' + err); });
};

TankController.$inject = ['$http'];
export default TankController;
