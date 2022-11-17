const FlightModel = require("../models/flight")
const FlightBookingModel = require("../models/ticket")

    exports.createFlight = async (req, res) => {
        try {
            const { flightNo, flightName, travel_btw_cities, flight_timmings,  planeCategory} = req.body
            const check = await FlightModel.findOne({ flightNo: flightNo })

            if (check) {
                res.send("Already Exists Please Add New Flight");
            }
            else {
            const doc = new FlightModel({
                flightNo: flightNo,
                flightName: flightName,
                travel_btw_cities: travel_btw_cities,
                flight_timmings: flight_timmings,
                planeCategory: planeCategory,

            });
            const result = await doc.save();
            res.send(result);
        }
    }
        catch (error) {
            console.log(error);
        }
    }

    exports.getFlight = async (req, res) => {
        try {
            const flights = await FlightModel.find({})
            res.send(flights);
        } catch (error) {
            res.status(500).send()
        }
    }

    exports.bookFlight = async (req, res) => {
        try {
            const { userName, date, flightNo } = req.body

            const check = await FlightModel.findOne({ flightNo: flightNo })
            if (check) {
                const doc = new FlightBookingModel({
                    userName: userName,
                    date: date,
                    flightNo: check.flightNo,
                    flightName: check.flightName,
                    travel_btw_cities: check.travel_btw_cities,
                    planeCategory: check.planeCategory,
                });

                const result = await doc.save();
                res.send(`Your ticket is successsfully booked of ${result.travel_btw_cities} at ${result.date}`);
            }
            else {
                res.send("No plane Exist");
            }
        } catch (error) {
            console.log(error)
        }
    }

    exports.getbooking = async (req, res) => {
        try {
            const flights = await FlightBookingModel.find({})
            res.send(flights);
        } catch (error) {
            res.status(500).send()
        }
    }

