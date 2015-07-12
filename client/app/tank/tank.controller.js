'use strict';

let TankController = function (Api, $scope) {

  Api.get('/api')
    .then(data => {
      Promise.all(data.map(fishName => Api.get('/api/' + fishName)))
      .then(fishes => {
        $scope.$apply(() => {
          this.feed = fishes.reduce((t,f) => t += f.needs,0);
        });
      });
    })
    .catch(function(err){
      if(err){
        console.log(err);
      }
    });
};

TankController.$inject = ['Api', '$scope'];
export default TankController;
