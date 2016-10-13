 
 //DOC Ready Function
$(document).ready(function (){
            //Menu Scroll
            mainMenuScroll();
 });
    
function mainMenuScroll(){
    var mainMenuArr = ["#overview-menu","#struc-des-menu","#cod-prac-menu","#prm-api-menu"]
    var mainMenuAnch = ["#overview-menu-a","#struc-des-menu-a","#cod-prac-menu","#prm-api-menu"]

$(".menu-scroll").each(function(){
    for (i = 0; i < mainMenuArr.length; i++) {
            $(mainMenuArr[i]).click(function (){
                    $('html, body').animate({
                        scrollTop: $(mainMenuAnch[i]).offset().top
                    }, 2000);
                });
        }
    });    
}

$(".menu-scroll").each(function(){
   $(mainMenuArr[i]).click(function (){
                    $('html, body').animate({
                        scrollTop: $(mainMenuAnch[i]).offset().top
                    }, 2000);
                });
});


$(".menu-scroll").each(function(){
   var menuID =  $(this).attr('id');
        
            $(menuID).click(function (){
                    $('html, body').animate({
                        scrollTop: $(mainMenuAnch[i]).offset().top
                    }, 2000);
                });
        
});    

if(menuID === mainMenuArr[i]){

}
