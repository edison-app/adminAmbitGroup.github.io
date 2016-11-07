/*angular.module('app.features.controllers')
.controller("RefRouteController", ['$scope','$location', function($scope,$location) {   
   $scope.showApiDetails = function(apiReference) {
        $location.path('/view/' + apiReference.link);
    };
}]);*/

angular.module('app.features.controllers')
.config(function($routeProvider){
  $routeProvider
    .when("/views' + {{apiReferences.links}}", {
        templateUrl : "/views/{{apiReferences.links}}.html",
        controller : "RefRouteController"
    });
});

angular.module('app.features.controllers')
.controller("RefRouteController", ['$scope','$location', '$locationProvider','$window',function($scope,$location,$locationProvider) {
   $http.get("js/json_files/api_list.json")
        .then(function(response){
            $scope.apiReferences = response.data.apiReferences;
        })
     /*   .then(function(response){
         $locationProvider.html5Mode(true);
             //call the parameter json - reference:""''
            var getRefParam = $location.search().reference;
            if(getRefParam === {{apiReferences.links}}){
             //do your logic
             $location.path('#views/' + {{apiReferences.links}});
            };
        }); */
}]);