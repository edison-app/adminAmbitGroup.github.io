/******************************/
//**** Author David Thor ******/
/******************************/
/*This file holds scripts outside of risk_map.js. This includes
- Text Fade Out/In
*/

var $j = jQuery.noConflict();
$j(document).ready(function () {
        //Function to display text for each button/link
        legendHandler();
});


function legendHandler() {
        $j("#datamap").click(function () {
                showLegend1();
                hideLegend2();
                hideLegend3();
        });

        $j("#datamap2").click(function () {
                showLegend2();
                hideLegend1();
                hideLegend3();
        });

        $j("#datamap3").click(function () {
                showLegend3();
                hideLegend1();
                hideLegend2();
        });
}

function showLegend1() {
        $j("#legendmap1").css({ "display": "inline" });
}

function showLegend2() {
        $j("#legendmap2").css({ "display": "inline" });
}

function showLegend3() {
        $j("#legendmap3").css({ "display": "inline" });
}

function hideLegend1() {
        $j("#legendmap1").fadeOut("3000").css({ "display": "none" });
}

function hideLegend2() {
        $j("#legendmap2").fadeOut("3000").css({ "display": "none" });
}

function hideLegend3() {
        $j("#legendmap3").fadeOut("3000").css({ "display": "none" });
}
