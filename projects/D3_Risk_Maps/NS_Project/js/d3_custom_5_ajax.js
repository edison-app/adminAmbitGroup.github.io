  
  // A $( document ).ready() block.
$( document ).ready(function() {
    asynCallMaps();
});

/***********AJAX CALL**********/
//Global Vars
    var usaMapComplete = false;
    var worldMapComplete = false;

function asynCallMaps() {
      $.ajax({
        type: "GET",
        url: "js/vendor/datamaps.usa.min.js",
        dataType: "script",
        success: visualizeUSMap 
      });
      $.ajax({
        type: "GET",
        url: "js/vendor/datamaps.world.min.js",
        dataType: "script",
        success: function() {  usaMapComplete = true; visualizePR(); }
      });
    }
/***********AJAX CALL END**********/
  
function visualizeUSMap(){

  var map2 =
          new Datamap(
            {
              element: document.getElementById('map-container-two'),
              responsive: true,
              scope: "usa",
              fills:{
          
                    1: '#e3f6f8 ',      
                    2: '#cbe0e2',
                    3: '#b3cacc',
                    4: '#9bb4b7',
                    5: '#839ea1',
                    6: '#6c898b',
                    7: '#547376',
                    8: '#3c5d60',
                    9: '#0d3235'
               },
              height:500,
              //width:600,
                
            dataUrl: '../data/final_data.csv',
            dataType: 'csv',
            data: {},
                
            geographyConfig: {
                    highlightBorderColor: '#bada55',
                    popupTemplate: function(geography, data) {
                    return '<div class="hoverinfo">' + geography.properties.name + '<br>'+ '$' + data.perCap + ' ';
                    },
            highlightBorderWidth: 3
            },
            
            });
          map2.labels();
          window.addEventListener('resize2', function() { map2.resize2(); }); 
          usaMapComplete = true;
     }       
 function visualizePR(){         
     var prMapOne = new Datamap({
            element: document.getElementById("pr-map-container"),
            scope: 'world',
            setProjection: function(element) {
              var projection = d3.geo.equirectangular()
                .center([-62, 18])
                .rotate([4.4, 0])
                .scale(950)
                .translate([element.offsetWidth / 2, element.offsetHeight / 2]);
              var path = d3.geo.path()
                .projection(projection);

              return {path: path, projection: projection};
            },
            fills: {
                    low: 'green',
                    elevated: 'yellow',
                    significant:'red'
            },
            height:50,
            width:30,
            dataUrl: '../data/final_data.csv',
            dataType: 'csv',
            data: {},
            geographyConfig: {
                              highlightBorderColor: '#bada55',
                              popupTemplate: function(geography, data) {
                              return '<div class="hoverinfo">' + geography.properties.name + '</br>'+ 'Risk Score:' + data.perCap + ' ';
                              },
                      highlightBorderWidth: 3
                      },
            });
            prMapOne.labels();        
 }
 
 
