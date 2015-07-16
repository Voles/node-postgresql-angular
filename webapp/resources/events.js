angular.module('app')
  .service('Events', function ($http, apiPrefix) {
    function getAll() {
      return $http.get(apiPrefix + '/events')
        .then(function (response) {
          return response.data;
        });
    }

    return {
      getAll: getAll
    }
  });
