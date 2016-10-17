  var apiApp = angular.module("apiRefApp", []);
  
     apiApp.controller("ApiController", ['$scope','$http', function($scope,$http) {   
        $http.get("../js/json_files/api_list.json")
        .then(function(response){
            $scope.apiReferences = response.data.apiReferences;
        });
        }
    ] );

     
     // Apply datatables after last repeat, otherwise it won't render right
     apiApp.directive('onLastRepeat', function() {
         return function(scope, element, attrs) {
             if (scope.$last) setTimeout(function() {

                  $j('#apiTable tfoot th').each( function () {
                    var title = $j(this).text();
                    $j(this).html( '<input type="text" placeholder="Search '+title+'" />' );
                } );   


                 var list = $j('#apiTable').DataTable({
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
                
                        $j( 'input', this.footer() ).on( 'keyup change', function () {
                            if ( that.search() !== this.value ) {
                                that
                                    .search( this.value )
                                    .draw();
                            }
                        } );
                    } );

                 list.buttons().container()
                     .appendTo($('.col-sm-6:eq(0)', list.table().container()));
             }, 1);
                 
         };
     });
