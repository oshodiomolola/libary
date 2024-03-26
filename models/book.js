const mongoose = require('mongoose');

const librarySchema = new mongoose.Schema({
    _id: String,
    title: String,
    author: String,
    publishedYear: Number,
    genre: String,
    copiesAvailable: Number,
});

const Book = mongoose.model('Book', librarySchema);

module.exports = { Book }
