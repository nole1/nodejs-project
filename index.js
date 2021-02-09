const express = require('express');
const app = express();
const port = 8000;

const homeRoute = require('./routes/index');

// INTERPOLATION

// Understand CALLBACK FUNCTION


// use express router

app.use('/',homeRoute);

app.listen(port, function(err)
{
    if(err)
    {
        console.log(`Error in running server:${err}`);
    }

    console.log(`Server is running on port: ${port}`);
})