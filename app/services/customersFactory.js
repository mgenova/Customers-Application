(function() {
    var customersFactory = function($http) {
        

        var factory = {};
        
         factory.getCustomers = function () {
            return $http.get('/customers');
        };

        factory.getCustomer = function (customerId) {
            return $http.get('/customers/' + customerId);
        }
        
        factory.getOrders = function(){
            return $http.get('/orders');
        };
        
        factory.deleteCustomer = function(customerId){
            return $http.delete('/customers/' + customerId);
        }
        
        return factory;
    };
    
    customersFactory.$inject = ['$http'];
    
    angular.module('customersApp').factory('customersFactory', customersFactory);
    
}());




 /*Search the customers for the customerId
        factory.getCustomer = function(customerId) {
                for(var i=0, len=customers.length;i<len;i++){
                    if (customers[i].id === parseInt(customerId)) {
                        return customers[i]; */
