/*Option 1 create global varial app and app represents the customersApp module
 
var app = angular.module('customersApp', []);

*/


/* Option 2 &3: app is no longer in global scope  */
 
// ----------- ROUTES ------------


(function(){ 
    var app = angular.module('customersApp',['ngRoute', 'ngAnimate']);
    
    app.config(function($routeProvider){
        $routeProvider
            .when('/', {
                controller: 'customersController',
                templateUrl: 'app/views/customers.html'
            })
            //route parameter
           .when('/orders/:customerId', {
                controller: 'ordersController',
                templateUrl: 'app/views/orders.html'
            })
            .when('/orders', {
                controller: 'allOrdersController',
                templateUrl: 'app/views/allorders.html'
            })
            .otherwise({redirectTo:'/'});
    });                  
}());
 


