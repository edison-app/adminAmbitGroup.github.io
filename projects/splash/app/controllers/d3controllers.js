features.controller('bubbleCtrl', ['$scope', function($scope) {
  //Data for circles
   $scope.bubbleData = [
   { "x_axis": 300, "y_axis": 100, "radius": 60, "color" : "red","image": "bubble","url":"https://eddev.service-now.com/spa/bubble_chart.do"},
   { "x_axis": 120, "y_axis": 180, "radius": 60, "color" : "#fff","image": "pie","url":"https://www.google.com"},
   { "x_axis": 480, "y_axis": 180, "radius": 60, "color" : "blue","image": "map","url":"ttps://eddev.service-now.com/spa/maps.do" },
   { "x_axis": 300, "y_axis": 500, "radius": 60, "color" : "#fff","image": "tree","url":"https://www.google.com" },
   { "x_axis": 120, "y_axis": 380, "radius": 60, "color" : "#fff","image": "globe","url":"https://www.google.com" },
   { "x_axis": 480, "y_axis": 380, "radius": 60, "color" : "#fff","image":"scatter","url":"https://www.google.com" }]
}]);
