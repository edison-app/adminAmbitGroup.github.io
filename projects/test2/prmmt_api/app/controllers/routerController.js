angular.module('app.features.controllers')
.controller("RefRouteController", ['$scope','$location', function($scope,$location) {   
   $scope.showApiDetails = function(apiReference) {
        $location.path('/view/' + apiReference.link);
    };
}]);

angular.module('app.features.controllers',['ngRoute'])
.config(['$routeProvider',
  function(
    $routeProvider
) {
      $routeProvider.
        when('/{{apiReference.methods}}',{
            templateUrl: '/views/{{apiReference.methods}}.html',
            controller:'RefRouteController'
        })

 }])
