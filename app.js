const express = require("express")
require("dotenv").config()

const { connectToLibary } = require("./config")
const bookRouter = require("./routes/bookRoute")
const userRouter = require("./routes/userRoute")

const PORT = 8000

const app = express()
connectToLibary();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/books",  bookRouter)
app.use("/users", userRouter)

app.listen(PORT, (req, res)=> {
  console.log(`http://localhost:${PORT}`)
})