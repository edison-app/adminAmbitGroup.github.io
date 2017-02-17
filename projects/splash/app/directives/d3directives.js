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

      //Container for the gradients
      var defs = svg.append("defs");

      //Filter for the outside glow
      var filter = defs.append("filter")
        .attr("id", "glow");
      filter.append("feGaussianBlur")
        .attr("stdDeviation", "3.5")
        .attr("result", "coloredBlur");
      var feMerge = filter.append("feMerge");
      feMerge.append("feMergeNode")
        .attr("in", "coloredBlur");
      feMerge.append("feMergeNode")
        .attr("in", "SourceGraphic")

      defs.attr("class", "def-circle-container")
        .selectAll("def-circle-container")
        .data(scope.data).enter()
        .append("svg:pattern")
        .attr("id", function (d) { return d.image; })
        .attr("width", "100%")
        .attr("height", "100%")
        .attr("viewBox", "0 0 150 150")
        .append("svg:image")
        .attr("xlink:href", function (d) { return "img/" + d.image + ".png"; })
        .attr("width", 150)
        .attr("height", 150)
        .attr("x", "0%")
        .attr("y", "0%");


      var circleCreate = function () {
        var circleObj = svg.attr("class", "svg-circle-container")
          .selectAll("svg-circle-container");

        circleObj.data(scope.data).enter()
          .append("a")
          .attr("xlink:href", function (d) { return d.url;})
          .append("circle")
          .attr("cx", function (d) { return d.x_axis; })
          .attr("cy", function (d) { return d.y_axis; })
          .attr("r", function (d) { return d.radius; })
          .style("fill", function (d) { return d.color; })
          .attr('opacity', 0)
          .transition()
          .delay(function (d, i) { return i * 600; })
          .duration(3000)
          .style("fill", function (d) { return "url(#" + d.image + ")"; })
          .attr("opacity", 1)
          .each("end", circleMouseOver);
      }

      var circleMouseOver = function () {
        var circleGlobal = svg.selectAll("circle");
        circleGlobal.on("mouseover", function (d, i) {
          d3.select(this).transition()
            .ease("elastic")
            .duration("500")
            .attr("r", 75)
            .style("filter", "url(#glow)");
        })
          .on("mouseout", function (d, i) {
            d3.select(this).transition()
              .ease("quad")
              .delay("100")
              .duration("200")
              .attr("r", 60)
              .style("filter", "none");
          })
      }

      /***********circle handler*************/
      circleCreate();
      /*****************************/


    }
  };
  return bubbleGroupObj;
});