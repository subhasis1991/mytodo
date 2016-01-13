'use strict';

/**
 * @ngdoc overview
 * @name mytodoApp
 * @description
 * # mytodoApp
 *
 * Main module of the application.
 */
angular
  .module('mytodoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
  ])
  .constant('fireurl', 'https://glowing-fire-1006.firebaseio.com')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/scratchpad', {
        templateUrl: 'views/scratchpad.html',
        controller: 'ScratchpadCtrl',
        controllerAs: 'scratchpad'
      })
      .when('/todo', { //some testing app
        templateUrl: 'views/todo.html',
        controller: 'TodoCtrl',
        controllerAs: 'todo'
      })
      .when('/card', { //some testing app
        templateUrl: 'views/card.html',
        controller: 'CardCtrl',
        controllerAs: 'card'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
