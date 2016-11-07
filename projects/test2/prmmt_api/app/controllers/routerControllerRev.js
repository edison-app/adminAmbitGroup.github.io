angular.module('app.features.controllers')
.controller("RefRouteController", ['$scope','$location', '$locationProvider',function($scope,$location,$locationProvider) {
   $locationProvider.html5Mode(true);
   $scope.checkQueryParam = function(){
        //call the parameter json
         var getRefParam = $location.search().reference;
        /*Result:
            {
            reference : '',
            }*/
         //Condition for not empty parameter :-
        if(getRefParam === {{apiReferences.links}}){
        //do your logic
        $location.path('/view/' + {{apiReference.links}});
        }
  };
     
}]);

