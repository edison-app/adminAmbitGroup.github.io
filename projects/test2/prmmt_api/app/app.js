//bootstrap

/*angular.module('app', ['app.features.controllers','ngRoute'])
.config(['$routeProvider',
  function(
    $routeProvider
) {
      $routeProvider.
        when('/{{apiReference.methods}}',{
            templateUrl: '/views/{{apiReference.methods}}.html',
            controller:'/routerController'
        })

 }])*/

angular.module('app', ['app.features.controllers']);

/*angular.module('app', [
  'app.features.controllers','ngRoute'])
.config(function($routeProvider) {
    $routeProvider
    .when("/getChartFilterData", {
        templateUrl : "views/getChartFilterData.html"
    })
});*/
