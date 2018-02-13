var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
const PORT = 8000;
Book = require('./dbModels/book');

mongoose.connect(
    'mongodb://localhost/libadm'
);

var database = mongoose.connection;

app.get('/', function(request, response) {
    response.send('Api: /api/books');
});

app.get('/api/books', function(request, response) {
    Book.getBooks(function(error, books){
        if(error) {
            throw error; // Error on getting the library's books
        } else {
            // Converting the response to a human readable format
            response.json(books);
        }
    })
});

app.listen(PORT);

console.log('App is now running on port ', PORT);