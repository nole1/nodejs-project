const express = require('express');
const app = express();
const port = 8000;

const homeRoute = require('./routes/index');

// INTERPOLATION

// Understand CALLBACK FUNCTION


// use express router
// basically it is saying to go to homeRoute for any request that is
// coming in

app.use('/',homeRoute);

// setting up the view engine

app.set('view engine','ejs');

app.set('views','./views');

app.listen(port, function(err)
{
    if(err)
    {
        console.log(`Error in running server:${err}`);
    }

    console.log(`Server is running on port: ${port}`);
})