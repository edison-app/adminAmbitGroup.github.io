angular.module('app.features.controllers')
.directive('onLastRepeat', function() {
         return function(scope, element, attrs) {
             if (scope.$last) setTimeout(function() {

                  jQuery('#apiTable tfoot th').each( function () {
                    var title = jQuery(this).text();
                    jQuery(this).html( '<input type="text" placeholder="Search '+title+'" />' );
                } );   


                 var list = jQuery('#apiTable').DataTable({
                     "processing": true,
                     "responsive": true,
                
                     buttons: [
                         'pdf'
                     ],
                     "order": [
                         [0, "asc"]
                     ]
                 });

                  list.columns().every( function () {
                  var that = this;
                
                        jQuery( 'input', this.footer() ).on( 'keyup change', function () {
                            if ( that.search() !== this.value ) {
                                that
                                    .search( this.value )
                                    .draw();
                            }
                        } );
                    } );

                 list.buttons().container()
                     .appendTo(jQuery('.col-sm-5:eq(0)', list.table().container()));
             }, 1);
                 
         };
     });