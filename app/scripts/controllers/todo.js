    
angular.module('mytodoApp')

.controller('TodoCtrl', ['$scope','$firebaseArray','fireurl',function ($scope,$firebaseArray,fireurl){
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