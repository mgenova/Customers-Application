//accesible throughout the application
//Since is value, it's NOT accesible in the config() function

angular.module('customersApp').value('appSettings', {
    title: 'Customers Application',
    version: '1.0'
});


/*accessible in the config() function in app.js and constant is injectable, i.e.,
//app.config(function($routeProvider, appSettings)
//
//
angular.module('customersApp').constant('appSettings', {
    title: 'Customers Application',
    version: '1.0'
});

*/