'use strict';

let TankController = function (Api, $scope) {

  Api.get('cat')
    .then(data => {
      Promise.all(data.map(fishName => Api.get(fishName)))
      .then(fishes => {
        $scope.$apply(() => {
          this.feed = fishes.reduce((t,f) => t += f.needs,0);
        });
      });
    })
    .catch(err => {
      if(err){
        console.log(err);
      }
    });
};

TankController.$inject = ['Api', '$scope'];
export default TankController;
