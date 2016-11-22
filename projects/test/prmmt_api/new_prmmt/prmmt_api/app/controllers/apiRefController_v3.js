
/*Loads the table*/ 
angular.module('app.features.controllers')
.controller("LoadHomeTblController", ['$scope','$http','ApiLoadService', function($scope,$http,ApiLoadService) {   
            ApiLoadService.loadApiInfo();
    }
    ] );
    
/*Checks url for */
angular.module('app.features.controllers')
.controller("CheckQueryParamRef", ['$scope','$http','$location','ApiLoadService','$locationProvider', function($scope,$http,$location,$locationProvider,ApiLoadService) {   
    $locationProvider.html5Mode(true);
    var queryParRef = $location.search();
    ApiLoadService.apiReference().then(function(response){
        //Do what you will with the data.
            if ( queryParRef.hasOwnProperty( 'reference' ) ) 
                {
                var getQueryParRef = $location.search().reference;
                $location.path('/view/' + getQueryParRef + '.html');
                } 
                else{
                //Do the menu functionality
                console.log("Path does now exist.")
                } 
    });
} ] );


