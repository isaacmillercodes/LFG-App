(function() {

  'use strict';

  angular
    .module('lfgApp.components.register')
    .controller('registerController', registerController);

  registerController.$inject = ['RegisterService'];

  function registerController(RegisterService) {
    /*jshint validthis: true */
    const vm = this;
    vm.test = 'register test';
    vm.games = [];

    vm.newUser = initNewUser();

    vm.getIpLocation = () => {
      return RegisterService.getLocation().then(location => {
        let userLocation = location.data.loc.split(',');

        vm.newUser.address.geo.lat = parseFloat(userLocation[0]);
        vm.newUser.address.geo.lng = parseFloat(userLocation[1]);
        console.log(vm.newUser.address.geo);
      });

    };

    vm.getIpLocation();

    vm.submit = function() {
      vm.newUser.slug = vm.newUser.username + '-' +  Math.ceil(Math.random() * 10000);

      vm.games.map((value, index) => {
        if(value === true) {
          vm.newUser.interestedIn.push(index);
        }
      });

      vm.newUser.gender = parseInt(vm.system);

      console.log(vm.newUser);

      RegisterService.addUser(vm.newUser)
      .then(user => {
        localStorage.setItem('token', user.data.data.data.token);
      })
      .catch(err => { console.log(err);});

      vm.newUser = initNewUser();

    };

    function initNewUser() {
      const newUser = {
        address: {
          geo: {
            lat: '',
            lng: ''
          }
        },
        interestedIn: []
      };
      return newUser;
    }
  }

})();
