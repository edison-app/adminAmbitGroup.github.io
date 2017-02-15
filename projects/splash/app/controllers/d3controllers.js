features.controller('bubbleCtrl', ['$scope', function($scope) {
  //Data for circles
   $scope.bubbleData = [
   { "x_axis": 300, "y_axis": 100, "radius": 60, "color" : "red","image": "globe" },
   { "x_axis": 120, "y_axis": 180, "radius": 60, "color" : "#fff","image": "bubble"},
   { "x_axis": 480, "y_axis": 180, "radius": 60, "color" : "#fff","image": "globe"},
   { "x_axis": 300, "y_axis": 500, "radius": 60, "color" : "#fff","image": "bubble"},
   { "x_axis": 120, "y_axis": 380, "radius": 60, "color" : "#fff","image": "bubble"},
   { "x_axis": 480, "y_axis": 380, "radius": 60, "color" : "#fff","image":"globe"}]
}]);
