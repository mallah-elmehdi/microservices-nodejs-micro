// set up the modules
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

// create an app
const app = express();

// using the body parser
app.use(bodyParser.json())

// use middleware for all routes
app.use(routes);

// creat a server
app.listen(5000, () => {
	console.log("[ Comments Server ] => PORT: 5000");
})
