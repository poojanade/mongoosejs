const express = require('express');

require('./db/connection.js') //fetch connection file

const flightRouter = require('./routes/flights'); //fetch flight router file
const ticketRouter = require('./routes/tickets'); //fetch ticket router file

const port = process.env.PORT || 8000; 
const app = express();

app.use(express.json())  // to accept body

app.use(flightRouter); 
app.use(ticketRouter);

app.listen(port,()=>{
    console.log(`Server running on ${port}`);
});
