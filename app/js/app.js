var app = angular.module('sandstorm', [
  'ngRoute'
]);

app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/username.html',
        controller: 'usernameCtrl'
      })
      .when('/match', {
        templateUrl: 'partials/match.html',
        controller: 'gameCtrl'
      })
      .when('/game', {
        templateUrl: 'partials/game.html',
        controller: 'gameCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
);
