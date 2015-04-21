(function(){
    
    var ordersController = function($scope, $routeParams, customersFactory){
        var customerId = $routeParams.customerId;
        $scope.customers= null; 
   
        function init() {
            $scope.customers = customersFactory.getCustomer(customerId);
                
        }
        init();

 
    };
     //for minifier
    ordersController.$inject = ['$scope', '$routeParams', 'customersFactory'];

    angular.module('customersApp')
        .controller('ordersController', ordersController); 
}());
