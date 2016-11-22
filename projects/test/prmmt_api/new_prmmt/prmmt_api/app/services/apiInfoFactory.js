
angular.module('app.features.controllers')
.factory('ApiLoadService', ['$scope','$http', function($scope,$http) {
   var apiInfoFactory = {};
   
   apiInfoFactory.loadApiInfo = function() {
       $http.get("js/json_files/api_list.json")
        .then(function(response){
            $scope.apiReferences = response.data.apiReferences;
        });
   }
   return apiInfoFactory;
}
]); 


/*var mainApp = angular.module("mainApp", []);
mainApp.factory('MathService', function() {
   var factory = {};
   
   factory.multiply = function(a, b) {
      return a * b
   }
   
   return factory;
}); */