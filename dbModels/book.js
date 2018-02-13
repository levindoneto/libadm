var mongoose = require('mongoose');

var bookSchema = mongoose.Schema({
    // Unique ID is obtained when the insert function is used
    title: {
        type: String,
        required: true
    },
    numberOfCopies: {
        type: Number,
        required: true
    },
    numberOfAvailableCopies: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    dateOfAdding: {
        type: Date,
        default: Date.now
    }
});

// Make it accessible from outside
var Book = module.exports = mongoose.model('Book', bookSchema);

// Function for getting the library's books from the database
module.exports.getBooks = function(callback, restriction) {
    Book.find(callback).limit(restriction);
}