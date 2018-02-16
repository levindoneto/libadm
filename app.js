let mongoose = require('mongoose');
let bodyParser = require('body-parser');
let express = require('express');
let app = express();
const PORT = 8000;
Book = require('./dbModels/book');

app.use(bodyParser.json()); // Parse body input from the requests

mongoose.connect(
    'mongodb://localhost/libadm'
);

const database = mongoose.connection;

app.get('/', function(request, response) {
    response.send('Api: /api/books');
});

app.post('/api/books', function(request, response) {
    let book = request.body;
	Book.addBookElement(book, function(error, book) {
        if (error) {
            throw error;
        } else {
            response.json(book);
        }
    });
});

app.get('/api/books', function(request, response) {
    Book.getBooks(function(error, books) {
        if (error) {
            throw error; // Error on getting the library's books
        } else {
            // Convert the response to a human readable format
            response.json(books);
        }
    });
});

app.get('/api/books/:_id', function(request, response) {
    Book.getBook(request.params._id, function(error, book) {
        if (error) {
            throw error;
        } else {
            response.json(book);
        }
    });
});

app.put('/api/books/:_id', (request, response) => {
    let elementBookForEdition = request.body;
    Book.updateBook(
        elementBookForEdition,
        {_id: request.params._id},
        {},
        function(error, elementBookForEdition) {
            if (error) {
                throw error;
            }
            response.json(elementBookForEdition);
        }
    );
});

app.listen(PORT);

console.log('App is now running on port ', PORT);
