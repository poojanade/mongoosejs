const express = require('express');

require('./db/connection') //fetch connection file

const routes = require('./routes/routes'); //fetch router file

const port = process.env.PORT || 5000; //run port 
const app = express();


app.use(express.json())  // to accept body

//load routes
app.use(routes);

app.listen(port,()=>{
    console.log(`Server running on ${port}`);
});