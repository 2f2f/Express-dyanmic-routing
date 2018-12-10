var express = require('express');
var http = require('http');
var app = express();



app.use(express.static(__dirname));

app.get('/:id', function(req , res){
  res.send('hi' + req.params.id);
});

http.createServer(app).listen(3000);