var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var urlencodedParser = bodyParser.urlencoded({extended: false});


   app.get("/", function(req,res){
    res.sendFile(__dirname + '/Project/VenueBooking.html');
   });
   
   app.post('/', urlencodedParser ,function(req,res){
    console.log(req.body);
    res.send('You will be infromed  by the admin soon');
});
   


app.listen(3030);

console.log('Server Running..');