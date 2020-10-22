const express = require("express");

const routes = express.Router();
const UserController = require("./app/controller/UserController");

routes.get("/user", UserController.findUser);

routes.post("/user", UserController.createUser);

module.exports = routes;