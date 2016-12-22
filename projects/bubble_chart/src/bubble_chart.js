/******************************/
//******COPYRIGHT**************/
/******************************/
/*D3.js:

Copyright (c) 2010-2016, Michael Bostock
All rights reserved.

Bubble Chart:

Copyright (c) 2016, Jim Vallandingham
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice,
  this list of conditions and the following disclaimer in the documentation
  and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
/******************************/
//******END COPYRIGHT**********/
/******************************/



/* bubbleChart creation function. Returns a function that will
 * instantiate a new bubble chart given a DOM element to display
 * it in and a dataset to visualize.
 *
 * Organization and style inspired by:
 * https://bost.ocks.org/mike/chart/
 *
 */


function bubbleChart() {
  // Constants for sizing
  var width = 940; //940
  var height = 1200; //900

  // tooltip for mouseover functionality
  var tooltip = floatingTooltip('gates_tooltip', 240);

  // Locations to move bubbles towards, depending
  // on which view mode is selected.
  var center = { x: width / 2, y: height / 4 };

  /*var yearCenters = {
    2010: { x: width / 4, y: height / 4 },
    2011: { x: width / 2, y: height / 6 },
    2012: { x: 2 * width / 3 + 100, y: height / 6 },
    2013: { x: width / 4 - 25, y: height / 2 + 100 },
    2014: { x: width / 2 - 20, y: height / 2 + 100 },
    2015: { x: 2 * width / 3 + 100, y: height / 2 + 165},
    2016: { x: width / 4, y: height / 2 + 300},
};*/

  var formDiscCenters = {
    Formula: { x: width / 3, y: height / 3 },
    Discretionary: { x: 2 * width / 3, y: height / 3 }
  };

  var prinOffCenters = {
    IES: { x: width / 4, y: height / 4 },
    OCTAE: { x: width / 2, y: height / 6 },
    ODS: { x: 2 * width / 3 + 100, y: height / 6 },
    OELA: { x: width / 4 - 25, y: height / 2 + 100 },
    OESE: { x: width / 2 - 20, y: height / 2 + 100 },
    OII: { x: 2 * width / 3 + 100, y: height / 2 + 165},
    OPE: { x: width / 4, y: height / 2 + 300},
    OSERS: { x: width / 2, y: height / 2 + 300 }
  };
  
  // X locations of the year titles.
 /* var yearsTitleX = {
    2010: 200,
    2011: width / 2,
    2012: width - 200,
    2013: 200,
    2014: width / 2,
    2015: width - 200,
    2016: 200,
  };

  var yearsTitleY = {
    2010: 40,
    2011: 40,
    2012: 40,
    2013: 480,
    2014: 480,
    2015: 480,
    2016: 800,
  }; */

  var formDiscsTitleX = {
    Formula: 170,
    Discretionary: 626,
    //2010: width - 160
  };

  var prinOffTitleX = {
    IES: 200,
    OCTAE: width / 2,
    ODS: width - 200,
    OELA: 200,
    OESE: width / 2,
    OII: width - 200,
    OPE: 200,
    OSERS: width / 2
  };
 // Y locations of the year titles

  var prinOffTitleY = {
    IES: 40,
    OCTAE: 40,
    ODS: 40,
    OELA: 480,
    OESE: 480,
    OII: 480,
    OPE: 800,
    OSERS: 800
};

  // @v4 strength to apply to the position forces
  var forceStrength = 0.03;

  // These will be set in create_nodes and create_vis
  var svg = null;
  var bubbles = null;
  var nodes = [];

  // Charge function that is called for each node.
  // As part of the ManyBody force.
  // This is what creates the repulsion between nodes.
  //
  // Charge is proportional to the diameter of the
  // circle (which is stored in the radius attribute
  // of the circle's associated data.
  //
  // This is done to allow for accurate collision
  // detection with nodes of different sizes.
  //
  // Charge is negative because we want nodes to repel.
  // @v4 Before the charge was a stand-alone attribute
  //  of the force layout. Now we can use it as a separate force!
  function charge(d) {
    return -Math.pow(d.radius, 2.0) * forceStrength;
  }

  // Here we create a force layout and
  // @v4 We create a force simulation now and
  //  add forces to it.
  var simulation = d3.forceSimulation()
    .velocityDecay(0.2)
    .force('x', d3.forceX().strength(forceStrength).x(center.x))
    .force('y', d3.forceY().strength(forceStrength).y(center.y))
    .force('charge', d3.forceManyBody().strength(charge))
    .on('tick', ticked);

  // @v4 Force starts up automatically,
  //  which we don't want as there aren't any nodes yet.
  simulation.stop();

  // Nice looking colors - no reason to buck the trend
  // @v4 scales now have a flattened naming scheme
  var fillColor = d3.scaleOrdinal()
    .domain(["under10","under50","under100","under250","over250"])
    .range(['#ff0000', '#0033cc', '#7aa25c','orange','brown']);


  /*
   * This data manipulation function takes the raw data from
   * the CSV file and converts it into an array of node objects.
   * Each node will store data and visualization values to visualize
   * a bubble.
   *
   * rawData is expected to be an array of data objects, read in from
   * one of d3's loading functions like d3.csv.
   *
   * This function returns the new node array, with a node in that
   * array for each element in the rawData input.
   */
  function createNodes(rawData) {
    // Use the max  in the data as the max in the scale's domain
    // note we have to ensure the total_amount is a number.
    var maxAmount = d3.max(rawData, function (d) { return +d.amount; });
    // Sizes bubbles based on area.
    // @v4: new flattened scale names.
    var radiusScale = d3.scalePow()
      .exponent(0.5)
      .range([2, 85])
      .domain([0, maxAmount]);

    // Use map() to convert raw data into node data.
    // Checkout http://learnjsdata.com/ for more on
    // working with data.
    var myNodes = rawData.map(function (d) {
      return {
        radius: radiusScale(+d.amount),
        value: +d.amount,
        //grantDate: d.start_date,
        name: d.name,
        color: d.color,
        year: d.year,
        grantType: d.type,
        grantOff:d.office,
        x: Math.random() * 900,
        y: Math.random() * 800
      };
    });

    // sort them to prevent occlusion of smaller nodes.
    //circle  algorithm
    myNodes.sort(function (a, b) { return b.value - a.value; });

    return myNodes;
  }

  /*
   * Main entry point to the bubble chart. This function is returned
   * by the parent closure. It prepares the rawData for visualization
   * and adds an svg element to the provided selector and starts the
   * visualization creation process.
   *
   * selector is expected to be a DOM element or CSS selector that
   * points to the parent element of the bubble chart. Inside this
   * element, the code will add the SVG continer for the visualization.
   *
   * rawData is expected to be an array of data objects as provided by
   * a d3 loading function like d3.csv.
   */
  var chart = function chart(selector, rawData) {
    // convert raw data into nodes data
    nodes = createNodes(rawData);

    // Create a SVG element inside the provided selector
    // with desired size.
    svg = d3.select(selector)
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    // Bind nodes data to what will become DOM elements to represent them.
    bubbles = svg.selectAll('.bubble')
      //.data(nodes, function (d) { return d.id; });
      .data(nodes);
    // Create new circle elements each with class `bubble`.
    // There will be one circle.bubble for each object in the nodes array.
    // Initially, their radius (r attribute) will be 0.
    // @v4 Selections are immutable, so lets capture the
    //  enter selection to apply our transtition to below.
    var bubblesE = bubbles.enter().append('circle')
      .classed('bubble', true)
      .attr('r', 0)
      .attr('fill', function (d) { return fillColor(d.color); })
      .attr('stroke', function (d) { return d3.rgb(fillColor(d.color)).darker(); })
      .attr('stroke-width', 2)
      .on('mouseover', showDetail)
      .on('mouseout', hideDetail);

    // @v4 Merge the original empty selection and the enter selection
    bubbles = bubbles.merge(bubblesE);

    // Fancy transition to make bubbles appear, ending with the
    // correct radius
    bubbles.transition()
      .duration(2000)
      .attr('r', function (d) { return d.radius; });

    // Set the simulation's nodes to our newly created nodes array.
    // @v4 Once we set the nodes, the simulation will start running automatically!
    simulation.nodes(nodes);

    // Set initial layout to single group.
    groupBubbles();
  };

  /*
   * Callback function that is called after every tick of the
   * force simulation.
   * Here we do the acutal repositioning of the SVG circles
   * based on the current x and y values of their bound node data.
   * These x and y values are modified by the force simulation.
   */
  function ticked() {
    bubbles
      .attr('cx', function (d) { return d.x; })
      .attr('cy', function (d) { return d.y; });
  }

  /*
   * Provides a x value for each node to be used with the split by year
   * x force.
   */
  /*function nodeYearPosX(d) {
    //var stringXYear = d.colorprop.toString();
    return yearCenters[d.colorprop].x;
  } */

 /* function nodeYearPosY(d) {
    //var stringYYear = d.colorprop.toString();
  return yearCenters[d.colorprop].y;
  } */

function nodeFormDiscPos(d) {
    return formDiscCenters[d.grantType].x;
  }

 function nodePrinOffPosX(d) {
    return prinOffCenters[d.grantOff].x;
  } 
  function nodePrinOffPosY(d) {
    return prinOffCenters[d.grantOff].y;
  }  
  /*
   * Sets visualization in "single group mode".
   * The year labels are hidden and the force layout
   * tick function is set to move all nodes to the
   * center of the visualization.
   */

  function groupBubbles() {
    //hideYearTitles();
    hideTypeTitles();
    hideTypePrinOff();

    // @v4 Reset the 'x' force to draw the bubbles to the center.
    simulation.force('x', d3.forceX().strength(forceStrength).x(center.x));
    simulation.force('y', d3.forceY().strength(forceStrength).y(300));
    // @v4 We can reset the alpha value and restart the simulation
    simulation.alpha(1).restart();
  }


  /*
   * Sets visualization in "split by year mode".
   * The year labels are shown and the force layout
   * tick function is set to move nodes to the
   * yearCenter of their data's year.
   */
  /*function splitBubblesYear() {
    hideTypeTitles();
    hideTypePrinOff();
    showYearTitles();

    // @v4 Reset the 'x' force to draw the bubbles to their year centers
    simulation.force('x', d3.forceX().strength(forceStrength).x(nodeYearPosX));
    simulation.force('y', d3.forceY().strength(forceStrength).y(nodeYearPosY));

    // @v4 We can reset the alpha value and restart the simulation
    simulation.alpha(1).restart();
  } */

  function splitBubblesFormDisc(){
      //hideYearTitles(); 
      hideTypePrinOff();
      showFormDiscTitles();
      // @v4 Reset the 'x' force to draw the bubbles to their year centers
    simulation.force('x', d3.forceX().strength(forceStrength).x(nodeFormDiscPos));
    simulation.force('y', d3.forceY().strength(forceStrength).y(300));

    // @v4 We can reset the alpha value and restart the simulation  
    simulation.alpha(1).restart();
  }

function splitBubblesPrinOff(){
      hideTypeTitles();
      //hideYearTitles();
      showPrinOffTitles();
      // @v4 Reset the 'x' force to draw the bubbles to their year centers
      simulation.force('x', d3.forceX().strength(forceStrength).x(nodePrinOffPosX));
      simulation.force('y', d3.forceY().strength(forceStrength).y(nodePrinOffPosY));
      // @v4 We can reset the alpha value and restart the simulation  
      simulation.alpha(1).restart();
}
  /*
   * Hides Year title displays.
   */
  /*function hideYearTitles() {
    svg.selectAll('.year').remove();
  }*/

  function hideTypeTitles() {
    svg.selectAll('.formdisc').remove();
  }

  function hideTypePrinOff() {
    svg.selectAll('.prinoff').remove();
  }

  /*
   * Shows Year title displays.
   */
  /*function showYearTitles() {
    // Another way to do this would be to create
    // the year texts once and then just hide them.
    var yearsData = d3.keys(yearsTitleX);
    var years = svg.selectAll('.year')
      .data(yearsData);

    years.enter().append('text')
      .attr('class', 'year')
      .attr('x', function (d) { return yearsTitleX[d]; })
      .attr('y', function (d) { return yearsTitleY[d]; })
      .attr('text-anchor', 'middle')
      .text(function (d) { return d; });
  }*/
    function showFormDiscTitles() {
    // Another way to do this would be to create
    // the year texts once and then just hide them.
    var discsData = d3.keys(formDiscsTitleX);
    var discs = svg.selectAll('.formdisc')
      .data(discsData);

    discs.enter().append('text')
      .attr('class', 'formdisc')
      .attr('x', function (d) { return formDiscsTitleX[d]; })
      .attr('y', 40)
      .attr('text-anchor', 'middle')
      .text(function (d) { return d; });
  }

  function showPrinOffTitles() {
    // Another way to do this would be to create
    // the year texts once and then just hide them.
    var discsData = d3.keys(prinOffTitleX);
    var discs = svg.selectAll('.prinoff')
      .data(discsData);
    discs.enter().append('text')
      .attr('class', 'prinoff')
      .attr('x', function (d) { return prinOffTitleX[d]; })
      .attr('y', function (d) { return prinOffTitleY[d]; })
      .attr('text-anchor', 'middle')
      .text(function (d) { return d; });
  }
  /*
   * Function called on mouseover to display the
   * details of a bubble in the tooltip.
   */
  function showDetail(d) {
    // change outline to indicate hover state.
    d3.select(this).attr('stroke', 'black');

    var content = '<span class="name">Title: </span><span class="value">' +
                  d.name +
                  '</span><br/>' +
                  '<span class="name">Amount: </span><span class="value">$' +
                  addCommas(d.value) +
                  '</span><br/>' +
                  '<span class="name">Year: </span><span class="value">' +
                  d.year + 
                  '</span><br/>' +
                  '<span class="name">Date: </span><span class="value">' +
                  d.grantDate + 
                  '</span>';

    tooltip.showTooltip(content, d3.event);
  }

  /*
   * Hides tooltip
   */
  function hideDetail(d) {
    // reset outline
    d3.select(this)
      .attr('stroke', d3.rgb(fillColor(d.color)).darker());
    tooltip.hideTooltip();
  }

  /*
   * Externally accessible function (this is attached to the
   * returned chart function). Allows the visualization to toggle
   * between "single group" and "split by year" modes.
   *
   * displayName is expected to be a string and either 'year' or 'all'.
   */
  chart.toggleDisplay = function (displayName) {
    if(displayName === 'formdisc') {
      splitBubblesFormDisc();
    } else if(displayName === 'prinoff') {
      splitBubblesPrinOff();
    } 
    else {
      groupBubbles();
    }
  };
/*(displayName === 'year') {
      splitBubblesYear();
    } else if*/

  // return the chart function from closure.
  return chart;
}

/*
 * Below is the initialization code as well as some helper functions
 * to create a new bubble chart instance, load the data, and display it.
 */

var myBubbleChart = bubbleChart();

/*
 * Function called once data is loaded from CSV.
 * Calls bubble chart function to display inside #vis div.
 */
function display(error, data) {
  if (error) {
    console.log(error);
  }

  myBubbleChart('#vis', data);
}

/*
 * Sets up the layout buttons to allow for toggling between view modes.
 */
function setupButtons() {
  d3.select('#toolbar')
    .selectAll('.button')
    .on('click', function () {
      // Remove active class from all buttons
      d3.selectAll('.button').classed('active', false);
      // Find the button just clicked
      var button = d3.select(this);

      // Set it as the active button
      button.classed('active', true);

      // Get the id of the button
      var buttonId = button.attr('id');

      // Toggle the bubble chart based on
      // the currently clicked button.
      myBubbleChart.toggleDisplay(buttonId);
    });
}

/*
 * Helper function to convert a number into a string
 * and add commas to it to improve presentation.
 */
function addCommas(nStr) {
  nStr += '';
  var x = nStr.split('.');
  var x1 = x[0];
  var x2 = x.length > 1 ? '.' + x[1] : '';
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + ',' + '$2');
  }

  return x1 + x2;
}

// Load the data.
d3.json('data/data.js', display);

// setup the buttons.
setupButtons();
