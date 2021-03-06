const mongoose = require('mongoose');

let bookSchema = mongoose.Schema({
    // Unique ID is obtained when the insert function is used
    title: {
        type: String,
        required: true, // Needed trailing comma
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

// Function for adding a book as an object element
module.exports.addBookElement = function(book, callback) {
    Book.create(book, callback);
};

// Function for getting the library's books from the database
module.exports.getBooks = function(callback, restriction) {
    Book.find(callback).limit(restriction); // return one object with all books
};

// Function for getting a book by its id
module.exports.getBook = function(bookId, callback) {
    Book.findById(bookId, callback);
};

// Function for editting a book by its id as query for the database
module.exports.updateBook = function(bookElement, settings, dbQuery, callback) {
    let updatedElement = {
        title: bookElement.title,
        numberOfCopies: bookElement.numberOfCopies,
        numberOfAvailableCopies: bookElement.numberOfAvailableCopies,
        category: bookElement.category,
    };
    Book.findOneAndUpdate(dbQuery, updatedElement, settings, callback);
};

// Function for books which have the same category
module.exports.getElementsByCategory = function(category, callback) {
    Book.find({category: {$in: [category]}}, callback);
};

// Function for editting a book by its id as query for the database
module.exports.removeBook = function(dbQuery, callback) {
    Book.remove(dbQuery, callback);
};
