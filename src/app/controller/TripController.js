const Trip = require("../model/Trip");
const GasStationController = require("./GasStationController");
const UserController = require("./UserController");
const ObjectId = require('mongodb').ObjectID;


class TripController {

    async createTrip(req, res) {

        const {
            idUser,
            idGasStation
        } = req.body;

        const existGas = await GasStationController.existById(idGasStation);
        const existUser = await UserController.existById(idUser);

        if (!existGas) {
            return res.status(400).json({
                "error": "Gas station does not exist :C"
            });
        }

        if (!existUser) {
            return res.status(400).json({
                "error": "User does not exist :C"
            });
        }

        const data = await Trip.create(req.body);

        return res.json(data);
    }

    async findTrip(req, res) {
        const data = await Trip.find({});

        return res.json(data);
    }

    async findTripById(req, res) {
        const id = req.params.id;

        try {
            const data = await Trip.findById(id);
            return res.json(data);
        } catch (e) {
            return res.status(404).json({
                "error": "Trip does not exist :C"
            });
        }
    }

    async updateTrip(req, res) {
        const id = req.query.id;

        const {
            latitudeOrigin,
            longitudeOrigin,
            latitudeDestiny,
            longitudeDestiny,
            tripDistance,
            tripDuration,
            idUser,
            idGasStation
        } = req.body;

        const existGas = await GasStationController.existById(idGasStation);
        const existUser = await UserController.existById(idUser);

        if (!existGas) {
            return res.status(400).json({
                "error": "Gas station does not exist :C"
            });
        }

        if (!existUser) {
            return res.status(400).json({
                "error": "User does not exist :C"
            });
        }

        try {
            const data = await Trip.updateOne({
                _id: ObjectId(id)
            }, {
                $set: {
                    "latitudeOrigin": latitudeOrigin,
                    "longitudeOrigin": longitudeOrigin,
                    "latitudeDestiny": latitudeDestiny,
                    "longitudeDestiny": longitudeDestiny,
                    "tripDistance": tripDistance,
                    "tripDuration": tripDuration,
                    "idUser": idUser,
                    "idGasStation": idGasStation
                }
            })

            return res.json(data);
        } catch (e) {
            return res.status(404).json({
                "error": "Trip does not exist :C"
            });
        }
    }

    async deleteTrip(req, res) {
        const id = req.query.id;

        try {
            const data = await Trip.deleteOne({
                _id: ObjectId(id)
            });

            return res.json(data);
        } catch (e) {
            return res.status(404).json({
                "error": "Trip does not exist :C"
            });
        }

    }
}

module.exports = new TripController();