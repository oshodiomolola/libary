const mongoose = require('mongoose');
require("dotenv").config();

function connectToLibary() {
  mongoose.connect(process.env.MONGOOSE_CONNECTION)
  mongoose.connection.on("connected", ()=> {
    console.log("Successfully connected to libary")
  })
  mongoose.connection.on("error", (err)=> {
    console.log(err)
    console.log("Connection to libary failed!")
  })
}

module.exports = { connectToLibary }