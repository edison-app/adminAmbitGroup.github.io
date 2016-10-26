//bootstrap


//angular.module('app', ['app.features.controllers']);
angular.module('app', ['app.features.controllers','ngRoute'])
.config(['$routeProvider',
  function(
    $routeProvider
) {
      $routeProvider.
        when('/{{apiReference.methods}}',{
            templateUrl: '/views/{{apiReference.links}}.html',
            controller:'RefRouteController'
        })

 }])