
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

angular.module('app.features.controllers')
.controller("ApiController", ['$scope','$http','ApiLoadService', function($scope,$http,ApiLoadService) {   
        $scope.loadApiInfo = function() {       
            ApiLoadService.loadApiInfo();
        }
    }
    ] );
    
