const mongoose = require("mongoose");

const ticketSchema = mongoose.model('ticket', {
    ticketNo: {
            type: Number,
            required: true,
            unique: true
    },
    passenger: {
        type: String,
        required: true,
        trim: true
    },
    destination: {
        type: String,
        required: true,
        trim: true
    },
    // no.ofnumber
    // plane: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: true,
    //     ref: 'Flights'
    // }
})

module.exports = ticketSchema;