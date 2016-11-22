angular.module('app.features.controllers')
.factory('ApiLoadService', ['$http', function($http) {
   var apiInfoFactory = {};
   apiInfoFactory.loadApiInfo = function() {
       $http.get("js/json_files/api_list.json")
   }
   return apiInfoFactory;
}
]); 

angular.module('app.features.controllers')
.controller("ApiController", ['$scope','$http','ApiLoadService', function($scope,$http,ApiLoadService) {   
        $scope.loadApiInfo = function() {       
            ApiLoadService.loadApiInfo().then(function(response){
            $scope.apiReferences = response.data.apiReferences;
        });
        }
    }
    ] );
    
