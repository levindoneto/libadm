var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
const PORT = 8000;

mongoose.connect(
    'mongodb://localhost/libadm'
);

var database = mongoose.connection;

app.get('/', function(request, response) {
    response.send('>>LibAdm<<');
});

app.listen(PORT);

console.log('App is now running on port ', PORT);