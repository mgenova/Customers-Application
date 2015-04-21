(function() {
    var customersFactory = function() {
        var customers = [
            {
                id: 1,
                joined: '2000-12-02', 
                name: 'John', 
                city: 'Denver', 
                orderTotal: 9.9956,
                orders: [
                    {
                        id: 1,
                        product: 'Shoes',
                        total: 9.9956
                    }
                ]                                          
            },
            {
                id: 2,
                joined: '1965-01-25', 
                name: 'Jane', 
                city: 'San Francisco', 
                orderTotal: 4.5432,
                orders: [
                    {
                        id: 2,
                        product: 'Bicycle',
                        total: 799.9423 
                    }   
                ]
            },
            {
                id: 3,
                joined:'2000-12-02', 
                name:'Steve', 
                city:'Los Angeles', 
                orderTotal: 135.843,
                orders: [
                    {
                        id: 3,
                        product: 'Gloves',
                        total: 16.3534, 
                    }   
                ]
            },
            {
                id: 4,
                joined:'1965-01-25', 
                name:'Mary', 
                city:'Honolulu', 
                orderTotal:50.999,
                orders: [
                    {
                        id: 4,
                        product: 'Helmet',
                        total: 76.3534, 
                    }   
                ]
            }
        ];

        var factory = {};
        factory.getCustomers = function() {
            return customers;
        };
        
        //Search the customers for the customerId
        factory.getCustomer = function(customerId) {
                for(var i=0, len=customers.length;i<len;i++){
                    if (customers[i].id === parseInt(customerId)) {
                        return customers[i];

                    }
                }   
                return {};                
        }

        
        return factory;
      
    };
    angular.module('customersApp').factory('customersFactory', customersFactory);
    
}());



