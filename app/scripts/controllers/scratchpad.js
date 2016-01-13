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