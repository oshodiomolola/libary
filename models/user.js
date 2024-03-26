const mongoose = require("mongoose")

const Schema = mongoose.Schema
const UserSchema = new Schema({
username: {
  type: String,
  required: true,
  unique: true
},
email: {
  type: String,
  required: true,
  unique: true
},
role: {
  type: String,
  enum: ["user", "admin"],
  defualt: "user"
},
borrowedBooks: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "Book"
}
})

const User = mongoose.model("User", UserSchema)
module.exports = { User }