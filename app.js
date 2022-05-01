var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static('public\images\logo.png'));
// app.use(express.static('images'));

var urlencodedParser = bodyParser.urlencoded({extended: false});

app.get("/", function(req,res){
 res.sendFile(__dirname + '/LogIn.html');
});

app.post('/', urlencodedParser ,function(req,res){
    console.log(req.body);
    res.sendFile(__dirname + '/VenueBooking.html');
   });
app.listen(3030);

console.log('Server Running..');