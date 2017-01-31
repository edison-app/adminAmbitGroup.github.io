function showDataMap() {

  function createMapOese() {
    var mapOese =
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

          dataUrl: null,
          dataType: 'json',
          data:
          {
            "AK": {
              "fillKey": "5",
              "tAwdAmt": 321803544
            },
            "AL": {
              "fillKey": "8",
              "tAwdAmt": 1074920095
            },
            "AR": {
              "fillKey": "6",
              "tAwdAmt": 711173984
            },
            "AS": {
              "fillKey": "2",
              "tAwdAmt": 39453131
            },
            "AZ": {
              "fillKey": "8",
              "tAwdAmt": 1094808914
            },
            "CA": {
              "fillKey": "10",
              "tAwdAmt": 6874809677
            },
            "CO": {
              "fillKey": "7",
              "tAwdAmt": 811894185
            },
            "CT": {
              "fillKey": "6",
              "tAwdAmt": 622193229
            },
            "DC": {
              "fillKey": "6",
              "tAwdAmt": 695435839
            },
            "DE": {
              "fillKey": "4",
              "tAwdAmt": 186479199
            },
            "FL": {
              "fillKey": "10",
              "tAwdAmt": 3046104883
            },
            "FM": {
              "fillKey": "1",
              "tAwdAmt": 8559033
            },
            "GA": {
              "fillKey": "8",
              "tAwdAmt": 1827702634
            },
            "GU": {
              "fillKey": "3",
              "tAwdAmt": 55420185
            },
            "HI": {
              "fillKey": "5",
              "tAwdAmt": 375253485
            },
            "IA": {
              "fillKey": "5",
              "tAwdAmt": 401262386
            },
            "ID": {
              "fillKey": "5",
              "tAwdAmt": 268861430
            },
            "IL": {
              "fillKey": "9",
              "tAwdAmt": 2127984399
            },
            "IN": {
              "fillKey": "7",
              "tAwdAmt": 933230787
            },
            "KS": {
              "fillKey": "6",
              "tAwdAmt": 506482993
            },
            "KY": {
              "fillKey": "8",
              "tAwdAmt": 1042394439
            },
            "LA": {
              "fillKey": "8",
              "tAwdAmt": 1154790812
            },
            "MA": {
              "fillKey": "8",
              "tAwdAmt": 1152989140
            },
            "MD": {
              "fillKey": "7",
              "tAwdAmt": 976830023
            },
            "ME": {
              "fillKey": "5",
              "tAwdAmt": 300762841
            },
            "MH": {
              "fillKey": "1",
              "tAwdAmt": 1932327
            },
            "MI": {
              "fillKey": "8",
              "tAwdAmt": 1620591830
            },
            "MN": {
              "fillKey": "7",
              "tAwdAmt": 793591118
            },
            "MO": {
              "fillKey": "7",
              "tAwdAmt": 863934897
            },
            "MP": {
              "fillKey": "1",
              "tAwdAmt": 22685403
            },
            "MS": {
              "fillKey": "6",
              "tAwdAmt": 712399887
            },
            "MT": {
              "fillKey": "5",
              "tAwdAmt": 277712930
            },
            "NC": {
              "fillKey": "8",
              "tAwdAmt": 1660994344
            },
            "ND": {
              "fillKey": "4",
              "tAwdAmt": 203172549
            },
            "NE": {
              "fillKey": "5",
              "tAwdAmt": 309050776
            },
            "NH": {
              "fillKey": "4",
              "tAwdAmt": 206174480
            },
            "NJ": {
              "fillKey": "8",
              "tAwdAmt": 1327786861
            },
            "NM": {
              "fillKey": "6",
              "tAwdAmt": 649883332
            },
            "NV": {
              "fillKey": "5",
              "tAwdAmt": 463356204
            },
            "NY": {
              "fillKey": "10",
              "tAwdAmt": 3784363177
            },
            "OH": {
              "fillKey": "8",
              "tAwdAmt": 1775859710
            },
            "OK": {
              "fillKey": "7",
              "tAwdAmt": 773733059
            },
            "OR": {
              "fillKey": "6",
              "tAwdAmt": 708033975
            },
            "PA": {
              "fillKey": "9",
              "tAwdAmt": 2024931528
            },
            "PR": {
              "fillKey": "7",
              "tAwdAmt": 906970878
            },
            "PW": {
              "fillKey": "1",
              "tAwdAmt": 8645679
            },
            "RI": {
              "fillKey": "4",
              "tAwdAmt": 214066229
            },
            "SC": {
              "fillKey": "7",
              "tAwdAmt": 971328741
            },
            "SD": {
              "fillKey": "4",
              "tAwdAmt": 196817011
            },
            "TN": {
              "fillKey": "8",
              "tAwdAmt": 1146832629
            },
            "TX": {
              "fillKey": "10",
              "tAwdAmt": 5084707836
            },
            "UT": {
              "fillKey": "5",
              "tAwdAmt": 445399797
            },
            "VA": {
              "fillKey": "8",
              "tAwdAmt": 1196413270
            },
            "VI": {
              "fillKey": "2",
              "tAwdAmt": 47814023
            },
            "VT": {
              "fillKey": "4",
              "tAwdAmt": 222498299
            },
            "WA": {
              "fillKey": "8",
              "tAwdAmt": 1036941239
            },
            "WI": {
              "fillKey": "7",
              "tAwdAmt": 974998699
            },
            "WV": {
              "fillKey": "5",
              "tAwdAmt": 341456894
            },
            "WY": {
              "fillKey": "4",
              "tAwdAmt": 152840876
            }
          },

          geographyConfig: {
            highlightBorderColor: '#bada55',
            popupTemplate: function (geography, data) {
              return '<div class="hoverinfo">' + geography.properties.name + '<br>' + 'Total Award Amount: ' + '$' + addCommas(data.tAwdAmt) + ' ';
            },
            highlightBorderWidth: 3
          },
        });
    mapOese.labels();
    window.addEventListener('mapOeseResize', function () { mapOese.mapOeseResize(); });
  }

  function createMapOii() {
    var mapOii =
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

          dataUrl: null,
          dataType: 'json',
          data:
          {
            "AK": {
              "fillKey": "5",
              "tAwdAmt": 321803544
            },
            "AL": {
              "fillKey": "8",
              "tAwdAmt": 1074920095
            },
            "AR": {
              "fillKey": "6",
              "tAwdAmt": 711173984
            },
            "AS": {
              "fillKey": "2",
              "tAwdAmt": 39453131
            },
            "AZ": {
              "fillKey": "8",
              "tAwdAmt": 1094808914
            },
            "CA": {
              "fillKey": "10",
              "tAwdAmt": 6874809677
            },
            "CO": {
              "fillKey": "7",
              "tAwdAmt": 811894185
            },
            "CT": {
              "fillKey": "6",
              "tAwdAmt": 622193229
            },
            "DC": {
              "fillKey": "6",
              "tAwdAmt": 695435839
            },
            "DE": {
              "fillKey": "4",
              "tAwdAmt": 186479199
            },
            "FL": {
              "fillKey": "10",
              "tAwdAmt": 3046104883
            },
            "FM": {
              "fillKey": "1",
              "tAwdAmt": 8559033
            },
            "GA": {
              "fillKey": "8",
              "tAwdAmt": 1827702634
            },
            "GU": {
              "fillKey": "3",
              "tAwdAmt": 55420185
            },
            "HI": {
              "fillKey": "5",
              "tAwdAmt": 375253485
            },
            "IA": {
              "fillKey": "5",
              "tAwdAmt": 401262386
            },
            "ID": {
              "fillKey": "5",
              "tAwdAmt": 268861430
            },
            "IL": {
              "fillKey": "9",
              "tAwdAmt": 2127984399
            },
            "IN": {
              "fillKey": "7",
              "tAwdAmt": 933230787
            },
            "KS": {
              "fillKey": "6",
              "tAwdAmt": 506482993
            },
            "KY": {
              "fillKey": "8",
              "tAwdAmt": 1042394439
            },
            "LA": {
              "fillKey": "8",
              "tAwdAmt": 1154790812
            },
            "MA": {
              "fillKey": "8",
              "tAwdAmt": 1152989140
            },
            "MD": {
              "fillKey": "7",
              "tAwdAmt": 976830023
            },
            "ME": {
              "fillKey": "5",
              "tAwdAmt": 300762841
            },
            "MH": {
              "fillKey": "1",
              "tAwdAmt": 1932327
            },
            "MI": {
              "fillKey": "8",
              "tAwdAmt": 1620591830
            },
            "MN": {
              "fillKey": "7",
              "tAwdAmt": 793591118
            },
            "MO": {
              "fillKey": "7",
              "tAwdAmt": 863934897
            },
            "MP": {
              "fillKey": "1",
              "tAwdAmt": 22685403
            },
            "MS": {
              "fillKey": "6",
              "tAwdAmt": 712399887
            },
            "MT": {
              "fillKey": "5",
              "tAwdAmt": 277712930
            },
            "NC": {
              "fillKey": "8",
              "tAwdAmt": 1660994344
            },
            "ND": {
              "fillKey": "4",
              "tAwdAmt": 203172549
            },
            "NE": {
              "fillKey": "5",
              "tAwdAmt": 309050776
            },
            "NH": {
              "fillKey": "4",
              "tAwdAmt": 206174480
            },
            "NJ": {
              "fillKey": "8",
              "tAwdAmt": 1327786861
            },
            "NM": {
              "fillKey": "6",
              "tAwdAmt": 649883332
            },
            "NV": {
              "fillKey": "5",
              "tAwdAmt": 463356204
            },
            "NY": {
              "fillKey": "10",
              "tAwdAmt": 3784363177
            },
            "OH": {
              "fillKey": "8",
              "tAwdAmt": 1775859710
            },
            "OK": {
              "fillKey": "7",
              "tAwdAmt": 773733059
            },
            "OR": {
              "fillKey": "6",
              "tAwdAmt": 708033975
            },
            "PA": {
              "fillKey": "9",
              "tAwdAmt": 2024931528
            },
            "PR": {
              "fillKey": "7",
              "tAwdAmt": 906970878
            },
            "PW": {
              "fillKey": "1",
              "tAwdAmt": 8645679
            },
            "RI": {
              "fillKey": "4",
              "tAwdAmt": 214066229
            },
            "SC": {
              "fillKey": "7",
              "tAwdAmt": 971328741
            },
            "SD": {
              "fillKey": "4",
              "tAwdAmt": 196817011
            },
            "TN": {
              "fillKey": "8",
              "tAwdAmt": 1146832629
            },
            "TX": {
              "fillKey": "10",
              "tAwdAmt": 5084707836
            },
            "UT": {
              "fillKey": "5",
              "tAwdAmt": 445399797
            },
            "VA": {
              "fillKey": "8",
              "tAwdAmt": 1196413270
            },
            "VI": {
              "fillKey": "2",
              "tAwdAmt": 47814023
            },
            "VT": {
              "fillKey": "4",
              "tAwdAmt": 222498299
            },
            "WA": {
              "fillKey": "8",
              "tAwdAmt": 1036941239
            },
            "WI": {
              "fillKey": "7",
              "tAwdAmt": 974998699
            },
            "WV": {
              "fillKey": "5",
              "tAwdAmt": 341456894
            },
            "WY": {
              "fillKey": "4",
              "tAwdAmt": 152840876
            }
          },

          geographyConfig: {
            highlightBorderColor: '#bada55',
            popupTemplate: function (geography, data) {
              return '<div class="hoverinfo">' + geography.properties.name + '<br>' + 'Total Award Amount: ' + '$' + addCommas(data.tAwdAmt) + ' ';
            },
            highlightBorderWidth: 3
          },
        });
    //mapOii.labels();

    window.addEventListener('mapOiiResize2', function () { mapOii.octaeMapResize2(); });
  }


  function createMapOctae() {
    var mapOctae =
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

          dataUrl: null,
          dataType: 'json',
          data:
          {
            "AK": {
              "fillKey": "5",
              "tAwdAmt": 321803544
            },
            "AL": {
              "fillKey": "8",
              "tAwdAmt": 1074920095
            },
            "AR": {
              "fillKey": "6",
              "tAwdAmt": 711173984
            },
            "AS": {
              "fillKey": "2",
              "tAwdAmt": 39453131
            },
            "AZ": {
              "fillKey": "8",
              "tAwdAmt": 1094808914
            },
            "CA": {
              "fillKey": "10",
              "tAwdAmt": 6874809677
            },
            "CO": {
              "fillKey": "7",
              "tAwdAmt": 811894185
            },
            "CT": {
              "fillKey": "6",
              "tAwdAmt": 622193229
            },
            "DC": {
              "fillKey": "6",
              "tAwdAmt": 695435839
            },
            "DE": {
              "fillKey": "4",
              "tAwdAmt": 186479199
            },
            "FL": {
              "fillKey": "10",
              "tAwdAmt": 3046104883
            },
            "FM": {
              "fillKey": "1",
              "tAwdAmt": 8559033
            },
            "GA": {
              "fillKey": "8",
              "tAwdAmt": 1827702634
            },
            "GU": {
              "fillKey": "3",
              "tAwdAmt": 55420185
            },
            "HI": {
              "fillKey": "5",
              "tAwdAmt": 375253485
            },
            "IA": {
              "fillKey": "5",
              "tAwdAmt": 401262386
            },
            "ID": {
              "fillKey": "5",
              "tAwdAmt": 268861430
            },
            "IL": {
              "fillKey": "9",
              "tAwdAmt": 2127984399
            },
            "IN": {
              "fillKey": "7",
              "tAwdAmt": 933230787
            },
            "KS": {
              "fillKey": "6",
              "tAwdAmt": 506482993
            },
            "KY": {
              "fillKey": "8",
              "tAwdAmt": 1042394439
            },
            "LA": {
              "fillKey": "8",
              "tAwdAmt": 1154790812
            },
            "MA": {
              "fillKey": "8",
              "tAwdAmt": 1152989140
            },
            "MD": {
              "fillKey": "7",
              "tAwdAmt": 976830023
            },
            "ME": {
              "fillKey": "5",
              "tAwdAmt": 300762841
            },
            "MH": {
              "fillKey": "1",
              "tAwdAmt": 1932327
            },
            "MI": {
              "fillKey": "8",
              "tAwdAmt": 1620591830
            },
            "MN": {
              "fillKey": "7",
              "tAwdAmt": 793591118
            },
            "MO": {
              "fillKey": "7",
              "tAwdAmt": 863934897
            },
            "MP": {
              "fillKey": "1",
              "tAwdAmt": 22685403
            },
            "MS": {
              "fillKey": "6",
              "tAwdAmt": 712399887
            },
            "MT": {
              "fillKey": "5",
              "tAwdAmt": 277712930
            },
            "NC": {
              "fillKey": "8",
              "tAwdAmt": 1660994344
            },
            "ND": {
              "fillKey": "4",
              "tAwdAmt": 203172549
            },
            "NE": {
              "fillKey": "5",
              "tAwdAmt": 309050776
            },
            "NH": {
              "fillKey": "4",
              "tAwdAmt": 206174480
            },
            "NJ": {
              "fillKey": "8",
              "tAwdAmt": 1327786861
            },
            "NM": {
              "fillKey": "6",
              "tAwdAmt": 649883332
            },
            "NV": {
              "fillKey": "5",
              "tAwdAmt": 463356204
            },
            "NY": {
              "fillKey": "10",
              "tAwdAmt": 3784363177
            },
            "OH": {
              "fillKey": "8",
              "tAwdAmt": 1775859710
            },
            "OK": {
              "fillKey": "7",
              "tAwdAmt": 773733059
            },
            "OR": {
              "fillKey": "6",
              "tAwdAmt": 708033975
            },
            "PA": {
              "fillKey": "9",
              "tAwdAmt": 2024931528
            },
            "PR": {
              "fillKey": "7",
              "tAwdAmt": 906970878
            },
            "PW": {
              "fillKey": "1",
              "tAwdAmt": 8645679
            },
            "RI": {
              "fillKey": "4",
              "tAwdAmt": 214066229
            },
            "SC": {
              "fillKey": "7",
              "tAwdAmt": 971328741
            },
            "SD": {
              "fillKey": "4",
              "tAwdAmt": 196817011
            },
            "TN": {
              "fillKey": "8",
              "tAwdAmt": 1146832629
            },
            "TX": {
              "fillKey": "10",
              "tAwdAmt": 5084707836
            },
            "UT": {
              "fillKey": "5",
              "tAwdAmt": 445399797
            },
            "VA": {
              "fillKey": "8",
              "tAwdAmt": 1196413270
            },
            "VI": {
              "fillKey": "2",
              "tAwdAmt": 47814023
            },
            "VT": {
              "fillKey": "4",
              "tAwdAmt": 222498299
            },
            "WA": {
              "fillKey": "8",
              "tAwdAmt": 1036941239
            },
            "WI": {
              "fillKey": "7",
              "tAwdAmt": 974998699
            },
            "WV": {
              "fillKey": "5",
              "tAwdAmt": 341456894
            },
            "WY": {
              "fillKey": "4",
              "tAwdAmt": 152840876
            }
          },

          geographyConfig: {
            highlightBorderColor: '#bada55',
            popupTemplate: function (geography, data) {
              return '<div class="hoverinfo">' + geography.properties.name + '<br>' + 'Total Award Amount: ' + '$' + addCommas(data.tAwdAmt) + ' ';
            },
            highlightBorderWidth: 3
          },
        });
    mapOctae.labels();
    window.addEventListener('resizeMapOctae', function () { mapOctae.resizeMapOctae(); });
  }

  function handlerOeseMap() {
    d3.select("svg").remove();
    createMapOese();
  }

  function handlerOctaeMap() {
    d3.select("svg").remove();
    createMapOctae();
  }

  function handlerOiiMap() {
    d3.select("svg").remove();
    createMapOii();
  }

  //Map display functionality
  var displayedMap = function displayedMap() { };

  displayedMap.toggleDisplay = function (displayName) {
    if (displayName === 'oii') {
      handlerOiiMap();
    } else if (displayName === 'oese') {
      handlerOeseMap();
    } else {
      handlerOctaeMap();
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
  var map =
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

        dataUrl: null,
        dataType: 'json',
        data:
        {
          "AK": {
            "fillKey": "5",
            "tAwdAmt": 321803544
          },
          "AL": {
            "fillKey": "8",
            "tAwdAmt": 1074920095
          },
          "AR": {
            "fillKey": "6",
            "tAwdAmt": 711173984
          },
          "AS": {
            "fillKey": "2",
            "tAwdAmt": 39453131
          },
          "AZ": {
            "fillKey": "8",
            "tAwdAmt": 1094808914
          },
          "CA": {
            "fillKey": "10",
            "tAwdAmt": 6874809677
          },
          "CO": {
            "fillKey": "7",
            "tAwdAmt": 811894185
          },
          "CT": {
            "fillKey": "6",
            "tAwdAmt": 622193229
          },
          "DC": {
            "fillKey": "6",
            "tAwdAmt": 695435839
          },
          "DE": {
            "fillKey": "4",
            "tAwdAmt": 186479199
          },
          "FL": {
            "fillKey": "10",
            "tAwdAmt": 3046104883
          },
          "FM": {
            "fillKey": "1",
            "tAwdAmt": 8559033
          },
          "GA": {
            "fillKey": "8",
            "tAwdAmt": 1827702634
          },
          "GU": {
            "fillKey": "3",
            "tAwdAmt": 55420185
          },
          "HI": {
            "fillKey": "5",
            "tAwdAmt": 375253485
          },
          "IA": {
            "fillKey": "5",
            "tAwdAmt": 401262386
          },
          "ID": {
            "fillKey": "5",
            "tAwdAmt": 268861430
          },
          "IL": {
            "fillKey": "9",
            "tAwdAmt": 2127984399
          },
          "IN": {
            "fillKey": "7",
            "tAwdAmt": 933230787
          },
          "KS": {
            "fillKey": "6",
            "tAwdAmt": 506482993
          },
          "KY": {
            "fillKey": "8",
            "tAwdAmt": 1042394439
          },
          "LA": {
            "fillKey": "8",
            "tAwdAmt": 1154790812
          },
          "MA": {
            "fillKey": "8",
            "tAwdAmt": 1152989140
          },
          "MD": {
            "fillKey": "7",
            "tAwdAmt": 976830023
          },
          "ME": {
            "fillKey": "5",
            "tAwdAmt": 300762841
          },
          "MH": {
            "fillKey": "1",
            "tAwdAmt": 1932327
          },
          "MI": {
            "fillKey": "8",
            "tAwdAmt": 1620591830
          },
          "MN": {
            "fillKey": "7",
            "tAwdAmt": 793591118
          },
          "MO": {
            "fillKey": "7",
            "tAwdAmt": 863934897
          },
          "MP": {
            "fillKey": "1",
            "tAwdAmt": 22685403
          },
          "MS": {
            "fillKey": "6",
            "tAwdAmt": 712399887
          },
          "MT": {
            "fillKey": "5",
            "tAwdAmt": 277712930
          },
          "NC": {
            "fillKey": "8",
            "tAwdAmt": 1660994344
          },
          "ND": {
            "fillKey": "4",
            "tAwdAmt": 203172549
          },
          "NE": {
            "fillKey": "5",
            "tAwdAmt": 309050776
          },
          "NH": {
            "fillKey": "4",
            "tAwdAmt": 206174480
          },
          "NJ": {
            "fillKey": "8",
            "tAwdAmt": 1327786861
          },
          "NM": {
            "fillKey": "6",
            "tAwdAmt": 649883332
          },
          "NV": {
            "fillKey": "5",
            "tAwdAmt": 463356204
          },
          "NY": {
            "fillKey": "10",
            "tAwdAmt": 3784363177
          },
          "OH": {
            "fillKey": "8",
            "tAwdAmt": 1775859710
          },
          "OK": {
            "fillKey": "7",
            "tAwdAmt": 773733059
          },
          "OR": {
            "fillKey": "6",
            "tAwdAmt": 708033975
          },
          "PA": {
            "fillKey": "9",
            "tAwdAmt": 2024931528
          },
          "PR": {
            "fillKey": "7",
            "tAwdAmt": 906970878
          },
          "PW": {
            "fillKey": "1",
            "tAwdAmt": 8645679
          },
          "RI": {
            "fillKey": "4",
            "tAwdAmt": 214066229
          },
          "SC": {
            "fillKey": "7",
            "tAwdAmt": 971328741
          },
          "SD": {
            "fillKey": "4",
            "tAwdAmt": 196817011
          },
          "TN": {
            "fillKey": "8",
            "tAwdAmt": 1146832629
          },
          "TX": {
            "fillKey": "10",
            "tAwdAmt": 5084707836
          },
          "UT": {
            "fillKey": "5",
            "tAwdAmt": 445399797
          },
          "VA": {
            "fillKey": "8",
            "tAwdAmt": 1196413270
          },
          "VI": {
            "fillKey": "2",
            "tAwdAmt": 47814023
          },
          "VT": {
            "fillKey": "4",
            "tAwdAmt": 222498299
          },
          "WA": {
            "fillKey": "8",
            "tAwdAmt": 1036941239
          },
          "WI": {
            "fillKey": "7",
            "tAwdAmt": 974998699
          },
          "WV": {
            "fillKey": "5",
            "tAwdAmt": 341456894
          },
          "WY": {
            "fillKey": "4",
            "tAwdAmt": 152840876
          }
        },

        geographyConfig: {
          highlightBorderColor: '#bada55',
          popupTemplate: function (geography, data) {
            return '<div class="hoverinfo">' + geography.properties.name + '<br>' + 'Total Award Amount:' + ' $' + addCommas(data.tAwdAmt) + ' ';
          },
          highlightBorderWidth: 3
        },
      });
  //map.labels();
  window.addEventListener('resize', function () { map.resize(); });

}

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

loadInitialMap();
setupButtons();
