const express = require("express");
const controller = require("../controllers/book.controller")
const router = express.Router();

router.post("/", controller.createBook)
router.get("/allBooks", controller.viewBook)
router.patch("/:updateId", controller.updateBook)
router.delete("/:updateId", controller.deleteBook)

module.exports = router