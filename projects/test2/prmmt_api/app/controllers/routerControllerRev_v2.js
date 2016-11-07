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
        .then(function(response){
         $locationProvider.html5Mode(true);
             //call the parameter json - reference:""''
            var getRefParam = $location.search().reference;
            if(getRefParam === {{apiReferences.links}}){
             //do your logic
             $location.path('#views/' + {{apiReferences.links}});
            };
        });
}]);

/*
app.controller("londonCtrl", function ($scope) {
    $scope.msg = "I love London";
});
app.controller("parisCtrl", function ($scope) {
    $scope.msg = "I love Paris";
}); */
