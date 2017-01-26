function showDataMap() {

  function createMap1() {
    var map =
      new Datamap(
        {
          element: document.getElementById('map-container'),
          responsive: true,
          scope: "usa",
          fills: {

            low: 'green',
            elevated: 'yellow',
            significant: 'red'
          },
          width: 810,

          dataUrl: 'data/Total_Risk_Per_State_1.csv',
          dataType: 'csv',
          data: {},

          geographyConfig: {
            highlightBorderColor: '#bada55',
            popupTemplate: function (geography, data) {
              return '<div class="hoverinfo">' + geography.properties.name + '<br>' + 'Risk Score:' + data.totalRisk + ' '
            },
            highlightBorderWidth: 3
          },

        });
    map.labels();
    window.addEventListener('resize', function () { map.resize(); });
  }

  function createMap2() {
    var map2 =
      new Datamap(
        {
          element: document.getElementById('map-container'),
          responsive: true,
          scope: "usa",
          fills: {

            1: '#38B3BC',
            2: '#2D9097',
            3: '#226E73',
            4: '#174B4F',
            5: '#0D292B'
          },
          width: 810,

          dataUrl: 'data/Total_Obligated_Amt_3.csv',
          dataType: 'csv',
          data: {},

          geographyConfig: {
            highlightBorderColor: '#bada55',
            popupTemplate: function (geography, data) {
              return '<div class="hoverinfo">' + geography.properties.name + '<br>' + '$' + data.oblAmtDue + ' '
            },
            highlightBorderWidth: 3
          },

        });
    map2.labels();

    window.addEventListener('resize2', function () { map2.resize2(); });
  }


  function createMap3() {
    var map3 =
      new Datamap(
        {
          element: document.getElementById('map-container'),
          responsive: true,
          scope: "usa",
          fills: {

            1: '#e3f6f8',
            2: '#cbe0e2',
            3: '#b3cacc',
            4: '#9bb4b7',
            5: '#839ea1',
            6: '#6c898b',
            7: '#547376',
            8: '#3c5d60',
            9: '#24474A',
            10: '#0d3235'
          },

          width: 810,

          dataUrl: 'data/Avg_Obligated_Amt_4.csv',
          dataType: 'csv',
          data: {},

          geographyConfig: {
            highlightBorderColor: '#bada55',
            popupTemplate: function (geography, data) {
              return '<div class="hoverinfo">' + geography.properties.name + '<br>' + '$' + data.oblAmt + ' '
            },
            highlightBorderWidth: 3
          },

        });
    //map3.labels(); No labels
    window.addEventListener('resize3', function () { map3.resize3(); });
  }

  function handlerMap1() {
    d3.select("svg").remove();
    createMap1();
  }

  function handlerMap2() {
    d3.select("svg").remove();
    createMap2();
  }

  function handlerMap3() {
    d3.select("svg").remove();
    createMap3();
  }


  // var displayedMap = function displayedMap() {
  // }

  var displayedMap = function displayedMap() { };

  displayedMap.loadInitialMap = function () {
    createMap1();
  }

  displayedMap.toggleDisplay = function (displayName) {
    if (displayName === 'datamap2') {
      handlerMap2();
    } else if (displayName === 'datamap3') {
      handlerMap3();
    } else {
      handlerMap1();
    }
  };


  return displayedMap;

}

/*
 * Sets up the layout buttons to allow for toggling between view modes.
 */

var myDataMap = showDataMap();

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
      var dataArr = [];

      // Toggle the bubble chart based on
      // the currently clicked button.
      myDataMap.toggleDisplay(buttonId);
    });
}

function loadInitialMap() {
  var map3 =
    new Datamap(
      {
        element: document.getElementById('map-container'),
        responsive: true,
        scope: "usa",
        fills: {

          1: '#e3f6f8',
          2: '#cbe0e2',
          3: '#b3cacc',
          4: '#9bb4b7',
          5: '#839ea1',
          6: '#6c898b',
          7: '#547376',
          8: '#3c5d60',
          9: '#24474A',
          10: '#0d3235'
        },

        width: 810,

        dataUrl: 'data/Avg_Obligated_Amt_4.csv',
        dataType: 'csv',
        data: {},

        geographyConfig: {
          highlightBorderColor: '#bada55',
          popupTemplate: function (geography, data) {
            return '<div class="hoverinfo">' + geography.properties.name + '<br>' + '$' + data.oblAmt + ' '
          },
          highlightBorderWidth: 3
        },

      });
  //map3.labels(); No labels
  window.addEventListener('resize3', function () { map3.resize3(); });
}

loadInitialMap();
setupButtons();
