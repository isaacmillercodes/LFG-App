(function() {

  'use strict';

  angular
    .module('lfgApp.components.login')
    .service('LoginService', LoginService);

  LoginService.$inject = ['$http'];

  function LoginService($http) {
    /*jshint validthis: true */

    const locationUrl = 'https://ipinfo.io';
    const loginUrl = 'https://galvanize-student-apis.herokuapp.com/gdating/auth/login';

    this.login = (user) => {
      return $http({
        url: loginUrl,
        data: user,
        method: 'POST',
        headers: {'Content-Type': 'application/json'}
      });
    };

  }

})();
