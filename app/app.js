/*Option 1 create global varial app and app represents the customersApp module
 
var app = angular.module('customersApp', []);

*/


/* Option 2 &3: app is no longer in global scope  */
 
(function(){
 
 
    var app = angular.module('customersApp',['ngRoute']);
    
    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'customersController',
                templateUrl: 'app/views/customers.html'
            })
            .otherwise({redirectTo:'/'});
    });
        
        
        
        
        
        
            
}());
 


