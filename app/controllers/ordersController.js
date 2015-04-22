(function(){
    
    var ordersController = function($scope, $routeParams, customersFactory){
        var customerId = $routeParams.customerId;
        $scope.customer= null; 
   
        function init() {
            customersFactory.getCustomer(customerId)
                    .success(function(customer) {
                        $scope.customer = customer;
                    })
                    .error(function(data, status, headers, config){
                        console.log('There was an error');
                    });
        }
        init();

 
    };
     //for minifier
    ordersController.$inject = ['$scope', '$routeParams', 'customersFactory'];

    angular.module('customersApp')
        .controller('ordersController', ordersController); 
}());
