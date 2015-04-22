/* http://patrol-profile.codio.io:8080/customers */

var express = require('express');
var app = express();

//Customer Data
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



app.use(express.static(__dirname, '/'));

app.get('/customers/:id', function(req, res) {
    var customerId = parseInt(req.params.id);
    var data = {};

    for (var j=0,len=customers.length;j<len;j++) {
        if (customers[j].id === customerId) {
           data = customers[j];
           break;
        }
    }  
    res.json(data);

});


app.get('/customers', function(req, res) {
    res.json(customers);
    //res.json(500, { error: 'An error has occurred!' });
});

app.get('/orders', function(req, res){
    var orders = [];
    for (var i=0, len = customers.length;i<len;i++){
        if(customers[i].orders){
            for(var j=0, ordersLen = customers[i].orders.length;j<ordersLen;j++){
                orders.push(customers[i].orders[j]);
            }
        }
    }
    res.json(orders);
});

app.delete('/customers/:id', function(req, res){
    var customerId = parseInt(req.params.id);
    var data = { status:true };
    for(vari=0, len=customers.length;i<len;i++){
        if(customers[i].id === customerId){
            customers.splice(i,1);
            data = {status:true};
            break;
        }
    }
    res.json(data);
});





app.listen(8080);
console.log('Express Server is running on port 8080');


