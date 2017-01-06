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
                "top":"580px",
                "margin-left":"0px"
        }); 
}

function hideAllText(){  
        $j(".alltext").fadeOut("3000");
}

function showFormDiscText(){   
        $j(".formdisctext").fadeIn("slow");

        $j("#legendcontainer").css({
                "top":"580px",
                "margin-left":"351px"
        });
}

function hideFormDiscText(){   
        $j(".formdisctext").fadeOut("3000");
}

function showPrinOffText(){   
        $j(".prinofftext").fadeIn("slow");
        $j("#legendcontainer").css({
                "top":"460px",
                "margin-left":"650px"
        });
}

function hidePrinOffText(){   
        $j(".prinofftext").fadeOut("3000");
}

