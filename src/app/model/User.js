const mongoose = require("mongoose");

const User = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
        active: {
            type: Boolean,
            required: true
        },
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("User", User);