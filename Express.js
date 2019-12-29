var express = require('express');
var app = express();

app.get('/', function(req, res){
   res.send("Hello world!");

});
console.log("Port 3000"); 
app.listen(3000);
