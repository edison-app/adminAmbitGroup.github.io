  
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
        success: visualizeUSMaps 
      });
      $.ajax({
        type: "GET",
        url: "js/vendor/datamaps.world.min.js",
        dataType: "script",
        success: function() {  usaMapComplete = true; visualizePR(); }
      });
    }
/***********AJAX CALL END**********/
  
function visualizeUSMaps(){

  var map2 =
          new Datamap(
            {
              element: document.getElementById('map-container-two'),
              responsive: true,
              scope: "usa",
              fills:{
          
                    1: '#38B3BC',
                    2: '#2D9097',
                    3: '#226E73',
                    4: '#174B4F',
                    5: '#0D292B'
               },
              height:500,
              width:700,
                
            dataUrl: '../data/Total_Obligated_Amt_3.csv',
            dataType: 'csv',
            data: {},
                
            geographyConfig: {
                    highlightBorderColor: '#bada55',
                    popupTemplate: function(geography, data) {
                    return '<div class="hoverinfo">' + geography.properties.name + '<br>'+ '$' + data.oblAmtDue + ' ';
                    },
            highlightBorderWidth: 3
            },
            
            });
          map2.labels();
          window.addEventListener('resize2', function() { map2.resize2(); }); 
          
          
  var map3 =
          new Datamap(
            {
              element: document.getElementById('map-container-three'),
              responsive: true,
              scope: "usa",
              fills:{
          
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
              height:500,
              width:700,
                
            dataUrl: '../data/Avg_Obligated_Amt_4.csv',
            dataType: 'csv',
            data: {},
                
            geographyConfig: {
                    highlightBorderColor: '#bada55',
                    popupTemplate: function(geography, data) {
                    return '<div class="hoverinfo">' + geography.properties.name +'<br>'+ '$' +  data.oblAmt + ' ';
                    },
            highlightBorderWidth: 3
            },
            
            });
          //map3.labels(); No labels
          window.addEventListener('resize3', function() { map3.resize3(); }); 
          usaMapComplete = true;
          
     }       
 function visualizePR(){         
     var prMapOne = new Datamap({
            element: document.getElementById("pr-map-container"),
            scope: 'world',
            setProjection: function(element) {
              var projection = d3.geo.equirectangular()
                .center([-63, 18])
                .rotate([4.4, 0])
                .scale(600)
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
            width:150,
            dataUrl: '../data/Total_Risk_Per_State_1.csv',
            dataType: 'csv',
            data: {},
            geographyConfig: {
                              highlightBorderColor: '#bada55',
                              popupTemplate: function(geography, data) {
                              return '<div class="hoverinfo">' + geography.properties.name + '</br>'+ 'Risk Score:' + data.totalRisk + ' ';
                              },
                      highlightBorderWidth: 3
                      },
            });
            prMapOne.labels();        
 }
 
 
