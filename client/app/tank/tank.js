import tankRoute from 'client/app/tank/tank.route.js';
import TankController from 'client/app/tank/tank.controller.js';

export default angular.module('app.tank', [])
  .config(tankRoute)
  //Controllers
  .controller('tankController', TankController);
