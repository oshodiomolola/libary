const { Book } = require("../routes/bookRoute")

const createBook = async(req, res, next) => {
  try {
    const createBook = req.body
    console.log(req)
    const book =await Book.create(createBook)
  return res.status(201).json({ message: "Book created successfully" });
  next()
  } catch(err) {
    console.log("error", err)
  }
};

const viewBook = async (req, res, next) => {
  try {
    let filter = {};
    if (req.params.bookId) {
      filter = { book: req.params.bookId };
    }
const allBooks = await Book.find(filter);
    return res.status(200).json({
      result: "SUCCESSFUL",
      message: "Read book",
      size: allBooks.length,
      allBooks,
    });
    next()
  } catch (err) {
    next(new appError("error", err));
    return res.status(500).json({ message: "Internal server error" });
  }
};

const updateBook = async (req, res, next) => {
  try {
    const { bookId } = req.params;
    const updateData = req.body;
    const updatedBook = await Book.findByIdAndUpdate(bookId, updateData, { new: true });
    return res.status(200).json({ message: "Book updated successfully", updatedBook });
  } catch (err) {
    console.log("Error:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const deleteBook = async (req, res, next) => {
  try {
    const { bookId } = req.params;
    const deletedBook = await Book.findByIdAndDelete(bookId);
    return res.status(200).json({ message: "Book deleted successfully", deletedBook });
  } catch (err) {
    console.log("Error:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = {createBook, viewBook, updateBook, deleteBook}