const express = require("express");

const routes = express.Router();
const UserController = require("./app/controller/UserController");
const TripController = require("./app/controller/TripController");
const GasStationController = require("./app/controller/GasStationController");

routes.get("/user", UserController.findUser);

routes.post("/user", UserController.createUser);

routes.get("/trip", TripController.findTrip);

routes.get("/trip/:id", TripController.findTripById);

routes.post("/trip", TripController.createTrip);

routes.put("/trip", TripController.updateTrip);

routes.delete("/trip", TripController.deleteTrip);

routes.get("/gas-station", GasStationController.findGasStation);

routes.post("/gas-station", GasStationController.createGasStation);

module.exports = routes;