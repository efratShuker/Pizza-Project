const mongoose = require("mongoose");

const Addition = mongoose.model(
    "Addition",
    new mongoose.Schema({
        name: { type: String, required: true, unique: true },
        hebrewName: { type: String, required: true, unique: true },
        price: { type: Number, min: 0, required: true }
    })
);

module.exports = Addition;
