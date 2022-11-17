const express = require('express');
const router = express.Router();

// to fetch FlightController
const {getFlight, createFlight, bookFlight, getbooking} = require("../Controller/FlightController")
router.get('/getFlight', getFlight);
router.post('/createFlight', createFlight);
router.post('/bookingFlight', bookFlight);
router.get('/getbooking', getbooking);

module.exports = router;