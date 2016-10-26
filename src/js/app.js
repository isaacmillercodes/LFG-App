// sample angular code

(function() {

  'use strict';

  angular
    .module('lfgApp', [
      'ui.router',
      'lfg.config',
      'lfgApp.components.home',
      'lfgApp.components.login',
      'lfgApp.components.register'
    ]);

})();
