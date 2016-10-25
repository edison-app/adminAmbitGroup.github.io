//bootstrap
angular.module('app', ['app.features.controllers','ngRoute'])
.config(['$routeProvider',
  function(
    $routeProvider
) {
      $routeProvider.
        when('/getChartFilterData',{
            templateUrl: '/views/getChartFilterData.html'

        })

 }])

