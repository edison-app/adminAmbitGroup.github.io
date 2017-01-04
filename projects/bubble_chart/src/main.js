/******************************/
//**** Author David Thor ******/
/******************************/
/*This file holds scripts outside of tooltip.js and bubble_chart.js. This includes
- Text Fade Out/In
*/ 

var $j = jQuery.noConflict();
$j(document).ready(function(){
  //Function to display text for each button/link
    textHandler();
});


function textHandler(){
    $j("#all").click(function(){
        showAllText();
        hideFormDiscText();
    });

    $j("#formdisc").click(function(){
        hideAllText();
        showFormDiscText();
    });

    $j("#prinoff").click(function(){
        hideAllText();
        hideFormDiscText();
    });
}

function showAllText(){   
        $j(".alltext").fadeIn("slow");
}

function hideAllText(){  
        $j(".alltext").fadeOut("3000");
}

function showFormDiscText(){   
        $j(".formdisctext").fadeIn("slow");
}

function hideFormDiscText(){   
        $j(".formdisctext").fadeOut("slow");
}