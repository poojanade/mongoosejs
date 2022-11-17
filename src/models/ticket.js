const mongoose = require("mongoose");

//defining schema
const flightBookSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
      },
      date: {
        type: Date,
        required: true,
      },
    flightNo: {
        type: String,
        required: true
    },
    flightName: {
        type: String,
        required: true
    },
    from: {
        type: String,
        required: true,
      },
      to: {
        type: String,
        required: true,
      },
    planeCategory: {
        type: String,
        required: true
    },

});

const FlightBookingModel = mongoose.model("flightbook", flightBookSchema);

module.exports = FlightBookingModel;
