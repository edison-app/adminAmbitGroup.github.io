
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
    if ( queryParRef.hasOwnProperty( 'reference' ) ) 
                {
                //query parameter existing 
                 var newRefName = $location.search()['reference'];
                 if(newRefName === apiReference.link)
                 ApiLoadService.apiReference();
                   $location.path('view/' + apiReference.link);
                }
                else{
                //no
                }      
    }
    ] );


