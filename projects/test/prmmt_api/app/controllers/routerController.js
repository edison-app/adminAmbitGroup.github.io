angular.module('app.features.controllers')
.controller("refRouteController", ['$scope','$location', function($scope,$location) {   
   $scope.showApiDetails = function(apiReference) {
        $location.path('#/view/' + apiReference.link);
    };
}]);

