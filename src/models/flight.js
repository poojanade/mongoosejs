const mongoose = require("mongoose");

//defining schema
const flightSchema = new mongoose.Schema({
    flightNo: {
        type: String,
        required: true
    },
    flightName: {
        type: String,
        required: true
    },
    travel_btw_cities: {
        type: String,
        required: true
    },
    flight_timmings: {
        type: String,
        required: true
    },
    planeCategory: {
        type: String,
        required: true
    },
});

const FlightModel = mongoose.model("flight", flightSchema);

module.exports = FlightModel;
