(function() {

  'use strict';

  angular
    .module('lfg.config', [])
    .config(appConfig)
    .run(function($templateCache) {
      $templateCache.removeAll();
    });

  function appConfig() {}

})();
