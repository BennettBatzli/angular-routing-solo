var bestApp = angular.module('bestApp', ['ngRoute']);

bestApp.config(['$routeProvider', function($routeProvider) {

  $routeProvider
    .when('/home', {
      templateUrl: '/views/templates/home.html',
      controller: 'HomeController'
    })
    .when('/ned', {
      templateUrl: '/views/templates/ned.html',
      controller: 'NedController'
    })
    .when('/sansa', {
      templateUrl: '/views/templates/sansa.html',
      controller: 'SansaController'
    })
    .when('/tyrion', {
      templateUrl: '/views/templates/tyrion.html',
      controller: 'TyrionController'
    })
    .otherwise({
      redirectTo: 'home'
    });
}]);
