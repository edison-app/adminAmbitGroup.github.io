//bootstrap
angular.module('app', ['app.features.controllers','ngRoute'])
.config(['$routeProvider',
  function(
    $routeprovider
) {
      $routeProvider.
        when('/getChartFilterData',{
            templateUrl: '/views/getChartFilterData.html'

        })

 }])

