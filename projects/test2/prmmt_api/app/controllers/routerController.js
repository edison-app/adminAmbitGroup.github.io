/*angular.module('app.features.controllers')
.controller("RefRouteController", ['$scope','$location', function($scope,$location) {   
   $scope.showApiDetails = function(apiReference) {
        $location.path('/view/' + apiReference.link);
    };
}]);*/

angular.module('app.features.controllers', ["ngRoute"])
.config(function($routeProvider){
  $routeProvider
    .when("/views/getGbiOffNameFilterChartData", {
        templateUrl : "/views/getGbiOffNameFilterChartData.html",
        controller : "RefRouteController"
    });
});

angular.module('app.features.controllers')
.controller("RefRouteController", ['$scope','$location', '$locationProvider','$window',function($scope,$location,$locationProvider) {
   $http.get("js/json_files/api_list.json")
        .then(function(response){
            $scope.apiReferences = response.data.apiReferences;
        })
       .then(function(response){
         $locationProvider.html5Mode(true);
             //call the parameter json - reference:""''
            var getRefParam = $location.search().reference;
            //if(getRefParam === {{apiReferences[0].links}}){
            if(getRefParam === "getGbiOffNameFilterChartData"){    
             //do your logic
             $location.path("#views/getGbiOffNameFilterChartData");
            };
        }); 
}]);