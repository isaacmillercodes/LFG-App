(function() {

  'use strict';

  angular
    .module('lfgApp.components.auth')
    .service('AuthService', AuthService);

  AuthService.$inject = ['$http'];

  function AuthService($http) {
    const baseURL = 'https://galvanize-student-apis.herokuapp.com/gdating/auth/';

    this.login = (user) => {
      return $http({
        url: baseURL + 'login',
        data: user,
        method: 'POST',
        headers: {'Content-Type': 'application/json'}
      });
    };

    this.register = (user) => {
      return $http({
        url: baseURL + 'register',
        data: user,
        method: 'POST',
        headers: {'Content-Type': 'application/json'}
      });
    };
  }

})();
