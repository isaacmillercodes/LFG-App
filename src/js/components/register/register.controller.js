(function() {

  'use strict';

  angular
    .module('lfgApp.components.register')
    .controller('registerController', registerController);

  registerController.$inject = ['$scope'];

  function registerController($scope) {
    /*jshint validthis: true */
    const vm = this;
    vm.test = 'register test';

    vm.newUser = {};

    vm.submit = function() {
      console.log(vm.newUser);
    };

  }

})();
