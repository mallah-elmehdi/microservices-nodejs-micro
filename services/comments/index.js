// set up the modules
const express = require('express');
const bodyParser = require('body-parser');
const {
	randomBytes
} = require('crypto');
const routes = require('./route')

// create an app
const app =  express();

// use middleware for all routes
app.use('/', routes);

// creat a server
app.listen(3000, () => {
    console.log("starting the server ...");
})
