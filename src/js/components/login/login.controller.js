(function() {

  'use strict';

  angular
    .module('lfgApp.components.login')
    .controller('loginController', loginController);

  loginController.$inject = ['$scope'];

  function loginController($scope) {
    /*jshint validthis: true */
    const vm = this;
    vm.test = 'login test';

  }

})();
