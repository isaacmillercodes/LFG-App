(function() {

  'use strict';

  angular
    .module('lfg.config', ['ui.router'])
    .config(appConfig)
    .run(function($templateCache) {
      $templateCache.removeAll();
    });

    function appConfig($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/');
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl:'js/components/home/home.view.html'
        })
        .state('login', {
          templateUrl: 'js/components/home/partials/_login.html',
          controller: 'loginController',
          controllerAs: 'loginCtrl'
        });
        // .state('register', {
        //   url: '/register',
        //   templateUrl: 'js/components/register/register.view.html'
        // });
    }

})();
