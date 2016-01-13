'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp')
  .controller('MainCtrl', ['$scope','$firebaseArray','fireurl',function ($scope,$firebaseArray,fireurl) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    //real code begins here !!
    var ref = new Firebase(fireurl+ '/cards');
    var fireArray = $firebaseArray(ref);
    $scope.cards = fireArray;
    
  }]);
