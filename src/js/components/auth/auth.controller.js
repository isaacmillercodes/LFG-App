(function() {

  'use strict';

  angular
    .module('lfgApp.components.auth')
    .controller('authController', authController);

  authController.$inject = ['AuthService'];

  function authController(AuthService) {
    /*jshint validthis: true */
    const vm = this;
    vm.test = 'yeaaaaaah';

    // vm.user = {};
    // vm.newUser = {};

    // vm.onSubmit = function() {
    //   AuthService.login(vm.user)
    //   .then(user => {
    //     localStorage.setItem('token', user.data.token);
    //   });
    //   vm.user = {};
    // };
    // vm.register = function() {
    //   AuthService.register(vm.newUser)
    //   .then(user => {
    //     localStorage.setItem('token', user.data.token);
    //   });
    //   vm.newUser = {};
    // };
  }

})();
