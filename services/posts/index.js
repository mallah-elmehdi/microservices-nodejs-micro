// set up the modules
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const cors = require('cors')

// create an app
const app =  express();

// using the body parser
app.use(bodyParser.json())

// using cors
app.use(cors());

// use middleware for all routes
app.use(routes);

// creat a server
app.listen(4000, () => {
    console.log("[ Posts Server ] => PORT: 4000");
})
