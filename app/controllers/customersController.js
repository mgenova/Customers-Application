/*option 3: preferred approach */

(function(){
    var customersController = function($scope){
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
    };
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
    








