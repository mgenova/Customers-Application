/*option 3: preferred approach */

(function() {

    var customersController = function($scope, $log, customersFactory, appSettings) {
        $scope.sortBy = 'name';
        $scope.reverse = false;
        $scope.customers = [];
        $scope.appSettings = appSettings;

        function init() {
            // $scope.customers = customersFactory.getCustomers();   // syncronous call
            customersFactory.getCustomers()
                .success(function(customers) {
                    $scope.customers = customers;
                })
                .error(function(data, status, headers, config) {
                    $log.log(data.error + '' + status);
                //console.log('there was an error');
                });
        }

        init();

        $scope.doSort = function(propName) {
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;
        };
        
        
        $scope.deleteCustomer = function (customerId) {
            customersFactory.deleteCustomer(customerId)
                .success(function (status) {
                    if (status) {
                        for (var i = 0, len = $scope.customers.length; i < len; i++) {
                            if ($scope.customers[i].id === customerId) {
                                $scope.customers.splice(i, 1);
                                break;
                            }
                        }
                    }
                    else {
                        $window.alert('Unable to delete customer');
                    }
                })
                .error(function(data, status, headers, config) {
                    $log.log(data.error + '' + status);
                    //console.log('there was an error');
                });
            };
    };  
         
   
    //for minifier
    // If we used Minification, the $scope will get renamed and nothing would work.
    // To Fix: Use Parameter Injection Technique
    // eg. CustomersController.$inject = ['$scope', 'foo', 'bar'];
    
    customersController.$inject = ['$scope', '$log', 'customersFactory', 'appSettings'];
    
    angular.module('customersApp')
        .controller('customersController', customersController);
 
}());










/*
//option 1

app.controller('customersController', function($scope){
    $scope.sortBy = 'name';
    $scope.reverse = false;

    $scope.customers=[{joined:'2000-12-02', name:'John', city:'Chandler', orderTotal: 9.9956},
                     {joined:'1965-01-25', name:'Jane', city:'New York', orderTotal:4.5432},
                     {joined:'2000-12-02', name:'Steve', city:'Los Angeles', orderTotal: 135.843},
                     {joined:'1965-01-25', name:'Mary', city:'Honolulu', orderTotal:50.999}
                     ];

    $scope.doSort = function(probName){
    $scope.sortBy= propName;
    $scope.reverse = !$scope.reverse;
    };
 
});
 */

/*option 2: app is no longer global

(function(){
    
angular.module('customersApp')
    .controller('customersController', function($scope){
        $scope.sortBy = 'name';
        $scope.reverse = false;

        $scope.customers=[{joined:'2000-12-02', name:'John', city:'Chandler', orderTotal: 9.9956},
                         {joined:'1965-01-25', name:'Jane', city:'New York', orderTotal:4.5432},
                         {joined:'2000-12-02', name:'Steve', city:'Los Angeles', orderTotal: 135.843},
                         {joined:'1965-01-25', name:'Mary', city:'Honolulu', orderTotal:50.999}
                         ];

        $scope.doSort = function(probName){
        $scope.sortBy= propName;
        $scope.reverse = !$scope.reverse;
        };
    });
 
}());
*/
    








