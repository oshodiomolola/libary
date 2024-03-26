const { user, User } = require("../models/user");

const createUser = async (req, res, next) => {
  try {
    const createUser = req.body;
    const user = await User.create(createUser);
    return res.status(200).json({ message: "User created successfully" });
    next();
  } catch (err) {
    console.log("error", err);
  }
};

const viewUser = async (req, res, next) => {
  try {
    let filter = {};
    if (req.params.userId) {
      filter = { user: req.params.userId };
    }
    const allUser = await user.find(filter);
    return res.status(200).json({
      result: "SUCCESSFUL",
      message: "Read all users",
      size: allUser.length,
      allUser,
    });
    next();
  } catch (err) {
    next(new appError("error", err));
    return res.status(500).json({ message: "Internal server error" });
  }
};

const updateUser = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const updateData = req.body;
    const updatedUser = await User.findByIdAndUpdate(userId, updateData, {
      new: true,
    });
    return res
      .status(200)
      .json({ message: "User updated successfully", updatedUser });
  } catch (err) {
    console.log("Error:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const deletedUser = await User.findByIdAndDelete(userId);
    return res
      .status(200)
      .json({ message: "User deleted successfully", deletedUser });
  } catch (err) {
    console.log("Error:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const borrowBook = async (req, res, next) => {
  try {
    const { userId, bookId } = req.body;

    const book = await Book.findById(bookId);
    if (!book || !book.available) {
      return res
        .status(404)
        .json({ message: "Book not available for borrowing" });
    }

    const borrowedBook = await BorrowedBook.create({ userId, bookId });

    await Book.findByIdAndUpdate(bookId, { available: false });

    return res
      .status(200)
      .json({ message: "Book borrowed successfully", borrowedBook });
  } catch (err) {
    console.log("Error:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { createUser, viewUser, updateUser, deleteUser, borrowBook };