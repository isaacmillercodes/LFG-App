(function() {

  'use strict';

  angular
    .module('lfgApp.components.home')
    .controller('homeController', homeController);

  homeController.$inject = [];

  function homeController() {
    /*jshint validthis: true */
    const vm = this;
    vm.test = 'yeaaaaaah';

  }

})();
