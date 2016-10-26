angular.module('app.features.controllers')
.controller("ApiController", ['$scope','$http', function($scope,$http) {   
        $http.get("js/json_files/api_list.json")
        .then(function(response){
            $scope.apiReferences = response.data.apiReferences;
        });
        }
    ] )
 .controller("RefRouteController", ['$scope','$location', function($scope,$location) {   
   $scope.showApiDetails = function(apiReference) {
        $location.path('/view/' + apiReference.link);
    };
}])   
.config(['$routeProvider',
  function(
    $routeProvider
) {
      $routeProvider.
        when('/{{apiReference.methods}}',{
            templateUrl: '/views/{{apiReference.links}}.html',
            controller:'RefRouteController'
        })

 }]);
    
