angular.module('app', ['ngRoute'])
  .config(function ($routeProvider, $compileProvider) {
    $compileProvider.debugInfoEnabled(false);

    $routeProvider
      .when('/', {
        controller: 'HomeCtrl',
        controllerAs: 'vm',
        templateUrl: 'components/pages/home/home.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .constant('apiPrefix', 'http://localhost:3000/api');
