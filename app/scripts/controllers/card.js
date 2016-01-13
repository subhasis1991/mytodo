    
angular.module('mytodoApp')

.controller('CardCtrl', ['$scope','$firebaseArray','fireurl',function ($scope,$firebaseArray,fireurl){
    $scope.showPerson = false;

    var ref = new Firebase(fireurl+ '/cards');
    var fireArray = $firebaseArray(ref);
    $scope.cards = fireArray;
    
    

}]);