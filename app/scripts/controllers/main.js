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
    $scope.showPerson = false;

    var ref = new Firebase(fireurl+ '/persons');
    var fireArray = $firebaseArray(ref);
    // fireArray.$bindTo($scope, "data");
    $scope.persons = fireArray;
    
    fireArray.$loaded(function(){
        $scope.showList = true;  
    });

    $scope.todoDone = function(index){
        $scope.persons[index].done = !$scope.persons[index].done;
        //console.log($scope.persons[index].done);

        //save to firebase

        // $scope.persons.$set();
    };

    $scope.submit = function(){
        var person = {
            name: $scope.newName,
            done: false
        };
        $scope.savePerson(person);
    };

    $scope.savePerson = function(obj){
        //this is enough for saving data firebase
        fireArray.$add(obj);
    };

    $scope.removePerson = function(id){
        $scope.persons.$remove(id);
    };

    // register mouse move


  }]);
    
angular.module('mytodoApp')

.controller('ScratchpadCtrl', ['$scope','$firebaseObject','fireurl', function($scope,$firebaseObject,fireurl){
    $scope.showCursor = false;
    // angular.element('scratchpad').mo
    
    var ref = new Firebase(fireurl+ '/position');
    var  curPos = $firebaseObject(ref);

    curPos.$bindTo($scope, 'position')
    .then(function(){
        //data biding done!
    })

    $scope.trackMouse = function(e){
        var cursor = angular.element('.glyphicon-hand-up');
        var pos = {
            X: e.clientX,
            Y: e.clientY
        }

        $scope.setPos = {
            left: pos.X-50,
            top: pos.Y - 130
        }

        //update data
        $scope.position = $scope.setPos;

        $scope.showCursor = true;
    };

    $scope.$watch(function(){
        $scope.setPos = $scope.position;
    })

}]);