
angular.module('app.features.controllers')
.controller("ApiController", ['$scope','$http','ApiLoadService', function($scope,$http,ApiLoadService) {   
        $scope.loadApiInfo = function() {
            ApiLoadService.loadApiInfo();
        }
    }
    ] );
    
