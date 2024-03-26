const express = require("express");
const controller = require("../controllers/user.controller");
const userRoute = express.Router();

userRoute.post("/", controller.createUser);
userRoute.get("/viewUser", controller.viewUser);
userRoute.patch("/:updateId", controller.updateUser);
userRoute.delete("/:updateId", controller.deleteUser);
userRoute.post("/borrow", controller.borrowBook);

module.exports = userRoute;