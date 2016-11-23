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

angular.module('app.features.controllers')
.directive('apiHref', ['$location', '$window', function ($location, $window) {
        return{
            restrict: 'A',
            link: function (scope, element, attr) {
                element.attr('style', 'cursor:pointer');
                element.on('click', function(){
                    // $location.search(attr.programHref);
                    // $location.path('Final-Bi-Grantee-Details.do');
                    // $location.replace();
                    // scope.$apply();

                    //var appendURIvars = $location.search({duns : '{{program.duns}}' });

                    var host = $location.host();
                   /* var landingUrl = "http://" + host + "/projects/test2/prmmt_api/api_references.html?" + attr.apiHref; */
                    var landingUrl = "http://" + host + "/projects/test2/prmmt_api/api_references.html";
                    $window.location.href = landingUrl;
                    // $window.location.search = attr.programHref;
                });
                }
        }
        }]); 


        
