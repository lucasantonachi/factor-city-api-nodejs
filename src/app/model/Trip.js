const mongoose = require("mongoose");

const Trip = new mongoose.Schema(
    {
        latitudeOrigin: {
            type: String,
            required: true
        },
        longitudeOrigin: {
            type: String,
            required: true
        },
        latitudeDestiny: {
            type: String,
            required: true
        },
        longitudeDestiny: {
            type: String,
            required: true
        },
        tripDistance: {
            type: Number,
            required: true
        },
        tripDuration: {
            type: Number,
            required: true
        },
        idUser: {
            type: String,
            required: true
        },
        idGasStation: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Trip", Trip);