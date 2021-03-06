features.directive('bubbleChart', function () {
  //camel cased directive name
  //in your HTML, this will be named as bars-chart

  //explicitly creating a directive definition variable
  //this may look verbose but is good for clarification purposes
  //in real life you'd want to simply return the object {...}
  var bubbleGroupObj = {
    //We restrict its use to an element
    //as usually  <bars-chart> is semantically
    //more understandable
    restrict: 'E',
    //this is important,
    //we don't want to overwrite our directive declaration
    //in the HTML mark-up
    replace: false,
    //our data source would be an array
    //passed thru chart-data attribute
    scope: { data: '=chartData' },
    link: function (scope, element, attrs) {
      //in D3, any selection[0] contains the group
      //selection[0][0] is the DOM node
      //but we won't need that this time

      var chart = d3.select(element[0]);
      //to our original directive markup bars-chart
      //we add a div with out chart stling and bind each
      //data entry to the chart
      var svg = chart.append('svg');

      svg.attr("class", "svg-circle-container")
        .selectAll("svg-circle-container")
        .data(scope.data).enter().append("circle")
        .attr("cx", function (d) { return d.x_axis; })
        .attr("cy", function (d) { return d.y_axis; })
        .attr("r", function (d) { return d.radius;}) 
        .style("fill", function (d) { return d.color; });
      //a little of magic: setting it's width based
      //on the data value (d) 
      //and text all with a smooth transition
    }
  };

//if mouseover

  return bubbleGroupObj;
});