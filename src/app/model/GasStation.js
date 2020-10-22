const mongoose = require("mongoose");

const GasStation = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        latitude: {
            type: String,
            required: true
        },
        longitude: {
            type: String,
            required: true
        },
        evaluation: {
            type: Number,
            required: true
        },
        gasolinePrice: {
            type: Number,
            required: true
        },
        ethanolPrice: {
            type: Number,
            required: true
        },
        dieselPrice: {
            type: Number,
            required: true
        },
        gasPrice: {
            type: Number,
            required: true
        },
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("GasStation", GasStation);