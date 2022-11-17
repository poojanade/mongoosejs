const { db, aggregate } = require("../models/flight")
const FlightModel = require("../models/flight")
const FlightBookingModel = require("../models/ticket")

    exports.createFlight = async (req, res) => {
        try {
            const { flightNo, flightName, from, to, flight_timmings,  planeCategory} = req.body
            const check = await FlightModel.findOne({ flightNo: flightNo })

            if (check) {
                res.send("Already Exists Please Add New Flight");
            }
            else {
            const doc = new FlightModel({
                flightNo: flightNo,
                flightName: flightName,
                from: from,
                to: to,
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
                    from: check.from,
                    to: check.to,
                    planeCategory: check.planeCategory,
                });

                const result = await doc.save();
                res.send(`Your ticket is successsfully booked from ${result.from} to ${result.to} at ${result.date}`);
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
    
   

