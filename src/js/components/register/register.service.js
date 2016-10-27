(function() {

  'use strict';

  angular
    .module('lfgApp.components.register')
    .service('RegisterService', RegisterService);

  RegisterService.$inject = ['$http'];

  function RegisterService($http) {
    /*jshint validthis: true */

    const locationUrl = 'https://ipinfo.io';
    const registerUrl = 'https://galvanize-student-apis.herokuapp.com/gdating/auth/register';

    this.getLocation = () => {
      return $http.get(locationUrl);
    };

    this.addUser = (user) => {
      return $http({
        url: registerUrl,
        data: user,
        method: 'POST',
        headers: {'Content-Type': 'application/json'}
      });
    };

  }

})();
