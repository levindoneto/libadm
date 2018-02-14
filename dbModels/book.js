const mongoose = require('mongoose');

let bookSchema = mongoose.Schema({
    // Unique ID is obtained when the insert function is used
    title: {
        type: String,
        required: true, // needed trailing comma
    },
    numberOfCopies: {
        type: Number,
        required: true,
    },
    numberOfAvailableCopies: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    dateOfAdding: {
        type: Date,
        default: Date.now,
    },
});

// Make it accessible from outside
const Book = module.exports = mongoose.model('Book', bookSchema);

// Function for getting the library's books from the database
module.exports.getBooks = function(callback, restriction) {
    Book.find(callback).limit(restriction); // return one object with all books
};

// Function for getting a book by its id
module.exports.getBook = function(bookId, callback) {
    Book.findById(bookId, callback);
};

// Function for adding a book as an object element
module.exports.addBookElement = function(book, callback) {
    Book.create(book, callback);
};
