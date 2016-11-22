angular.module('app.features.controllers', ['ngRoute'])
.config(function($routeProvider) {
  $routeProvider
  .when("/getGbiOffNameFilterChartData", {
      templateUrl : "views/getGbiOffNameFilterChartData.html"
  });
});

/*angular.module('app.features.controllers', []);*/
