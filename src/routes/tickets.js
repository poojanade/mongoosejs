const express = require('express');

const ticketSchema = require('../models/tickets'); //fetch ticket Schema file

const router = express.Router();

// to post ticket data
router.post('/saveTicket', (req, res) => {
    const ticket = new ticketSchema(req.body);

    ticket
        .save()
        .then(() => {
            res.send(ticket)
        })
        .catch((error) => {
            res.status(400).send(error)
        })
});

//to get ticket data
router.get('/getTicket',async(req,res)=>{
    try {
        const tickets = await ticketSchema.find({})
        res.send(tickets);
    } catch (error) {
        res.status(500).send()
    }
});

// to ex[port module
module.exports = router;