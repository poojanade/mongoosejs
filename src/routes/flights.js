const express = require('express');

const flightSchema = require('../models/flights'); //fetch flight Schema file

const router = express.Router();

// to post flight data
router.post('/saveFlight', (req, res) => {
    const flight = new flightSchema(req.body);

    flight
        .save()
        .then(() => {
            res.send(flight)
        })
        .catch((error) => {
            res.status(400).send(error)
        })
});

// to get flight data
router.get('/getFlight',async(req,res)=>{
    try {
        const flights = await flightSchema.find({})
        res.send(flights);
    } catch (error) {
        res.status(500).send()
    }
})

// export module
module.exports = router;