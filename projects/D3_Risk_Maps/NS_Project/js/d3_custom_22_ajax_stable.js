  
  // A $( document ).ready() block.
$( document ).ready(function() {
    asynCallMaps();
});


function asynCallMaps() {
      $.ajax({
        type: "GET",
        url: "/vendor/datamaps.usa.min.js",
        dataType: "script",
        success: updateCsvFileVar 
      });
  /*   $.ajax({
        type: "GET",
        url: "js/vendor/datamaps.usa.min.js",
        dataType: "script",
        success: function() { usaMapComplete = true; visualizePR(); }
      });*/
    }
/***********AJAX CALL END**********/
 

function updateCsvFileVar(){
  var csvFileName="";
  var fileNames = ["PerCap2001","PerCap2002","PerCap2003","PerCap2004","PerCap2005","PerCap2006","PerCap2007","PerCap2008","PerCap2009","PerCap2010","PerCap2011","PerCap2012","PerCap2013","PerCap2014","PerCap2014","PerCap2015"];
  var yearId = ["year-2001","year-2002","year-2003","year-2004","year-2005","year-2006","year-2007","year-2008","year-2009","year-2010","year-2011","year-2012","year-2013","year-2014","year-2015"];


$('li.year').click(function(){
            var thisID = this.id;
            for (i = 0; i < yearId.length; i++) { 
                if (thisID == yearId[i]){
                newCsvFileName = csvFileName.replace("", fileNames[i]);
               return visualizeUSMap(newCsvFileName);}  
            }       
        });  
}


function visualizeUSMap(newTest){
  var usaMapComplete = false;
  var worldMapComplete = false;
  var map2 =
          new Datamap(
            {
              element: document.getElementById('map-container-two'),
              responsive: true,
              scope: 'usa',
              fills:{
                    1: '#e3f6f8',      
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
                
            dataUrl: '../../data/'+ newTest + '.csv',
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

 
 /*function visualizePR(){   

    var csvFileName='PerCap2002';
    var fileNames = ["PerCap2001","PerCap2002","PerCap2003","PerCap2004","PerCap2005","PerCap2006","PerCap2007","PerCap2008","PerCap2009","PerCap2010","PerCap2011","PerCap2012","PerCap2013","PerCap2014","PerCap2014","PerCap2015"];
    var yearId = ["year-2001","year-2002","year-2003","year-2004","year-2005","year-2006","year-2007","year-2008","year-2009","year-2010","year-2011","year-2012","year-2013","year-2014","year-2014","year-2014"];
    
    var pleaseWork = $('li.year').click(function(){
            var yearLi = this.getAttribute('id');
            if(yearLi==yearId[0]){
              csvFileName = fileNames[0];
            }else{
              csvFileName = fileNames[1];
            }
    });

     var prMapOne = new Datamap({
            scope: 'world',
            setProjection: function(element) {
              var projection = d3.geo.equirectangular()
                .center([-62, 18])
                .rotate([4.4, 0])
                .scale(680)
                .translate([element.offsetWidth / 2, element.offsetHeight / 2]);
              var path = d3.geo.path()
                .projection(projection);

              return {path: path, projection: projection};
            },
            fills: {
                    1: '#e3f6f8',      
                    2: '#cbe0e2',
                    3: '#b3cacc',
                    4: '#9bb4b7',
                    5: '#839ea1',
                    6: '#6c898b',
                    7: '#547376',
                    8: '#3c5d60',
                    9: '#0d3235'
            },
            height:50,
            width:150,
            dataUrl: '../data/'+ csvFileName + '.csv',
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
 }*/
 
