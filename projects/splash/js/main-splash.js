
var $j = jQuery.noConflict();
$j(document).ready(function () {
    logoAnim();
});

function logoAnim(){
    $j('.text-area').children('img').fadeIn('slow');
}