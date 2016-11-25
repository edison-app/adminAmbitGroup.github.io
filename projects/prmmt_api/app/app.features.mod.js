angular.module('app.features.controllers', ['ngRoute'])
.config(function($routeProvider) {
  $routeProvider
  .when("/getGbiFilterChartData", {
      templateUrl : "views/getGbiFilterChartData.html"
  });
});

/*angular.module('app.features.controllers', []);*/
