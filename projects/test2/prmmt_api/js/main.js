 
 //DOC Ready Function
jQuery.noConflict();
jQuery(document).ready(function (){
    //Menu Scroll
    mainMenuScroll();
    //Table highlight
    highlightTblRows();
});
    
//Menu Scroller    
function mainMenuScroll(){
         jQuery(".menu-scroll").click(function(event){
         event.preventDefault();
         //calculate destination place
         var dest=0;
         if(jQuery(this.hash).offset().top > jQuery(document).height()-jQuery(window).height()){
              dest=jQuery(document).height()-jQuery(window).height();
         }else{
              dest=jQuery(this.hash).offset().top-50;
         }
         //go to destination
         jQuery('html,body').animate({scrollTop:dest}, 1000,'swing');
 });   
 }

//Datatables Functionality
function highlightTblRows(){
        $j('#apiTable tbody')
                .on( 'mouseenter', 'td', function () {
                    var colIdx = table.cell(this).index().column;
                    $j( table.cells().nodes() ).removeClass( 'highlight' );
                    $j( table.column( colIdx ).nodes() ).addClass( 'highlight' );
                } );
}
