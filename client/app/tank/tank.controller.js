'use strict';

let TankController = function ($http) {
    var self = this;
    var totalFish;
    var returnedFish = 0;
    self.feed = 0;
    self.allReturned = function(){
      return totalFish === returnedFish;
    };

    $http.get('/api')
      .success(function(data){
        totalFish = data.length;
        data.forEach(function(fishName){
          $http.get('/api/' + fishName)
          .success(function(data){
            self.feed += data.needs;
            returnedFish++;
          });
        });
    })
    .error(function(err){ console.log('yo' + err); });
};

TankController.$inject = ['$http'];
export default TankController;
