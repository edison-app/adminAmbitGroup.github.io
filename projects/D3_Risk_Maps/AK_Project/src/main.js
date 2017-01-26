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
        hideFormDiscText();
        hidePrinOffText();
        showAllText();
    });

    $j("#formdisc").click(function(){
        hideAllText();
        hidePrinOffText();
        showFormDiscText();
    });

    $j("#prinoff").click(function(){
        hideAllText();
        hideFormDiscText();
        showPrinOffText();
    });
}

function showAllText(){
        $j(".alltext").fadeIn("slow");
        $j("#legendcontainer").css({
                "top":"596px",
                "margin-left":"20px"
        });
        $j("#legendcircletext").css({"display":"inline"});
}

function hideAllText(){
        $j(".alltext").fadeOut("3000");
}

function showFormDiscText(){
        $j(".formdisctext").fadeIn("slow");

        $j("#legendcontainer").css({
                "top":"580px",
                "margin-left":"330px"
        });
        $j("#legendcircletext").css({"display":"inline"});
}

function hideFormDiscText(){
        $j(".formdisctext").fadeOut("3000");
}

function showPrinOffText(){
        $j(".prinofftext").fadeIn("slow");
        $j("#legendcontainer").css({
                "top":"578px",
                "margin-left":"670px"
        });
      //  $j("#legendcircletext").css({"display":"none"});
}

function hidePrinOffText(){
        $j(".prinofftext").fadeOut("3000");
}
