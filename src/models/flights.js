const mongoose = require("mongoose");

const flightSchema = mongoose.Schema({
    flightNo: {
        type: Number,
        required: true,
        unique: true
    },
    travelCities: {
        type: String,
        required: true
    },
    flightTimmings: {
        type: String,
        required: true
    },
    planeCategory: {
        type: String,
        required: true
    }
})

// flightSchema.virtual('ticket',{
//     ref: 'Tickets',
//     localField:'_id',
//     foreignField: 'plane'
// })
const flights = mongoose.model('flights', flightSchema)

module.exports = flights;