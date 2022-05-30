// set up the moduls
const express = require('express') 
const bodyParser = require('body-parser') 
const routes = require('./routes')

// create an express app
const app = express();

// using json body parser
app.use(bodyParser.json())

// listning to the routes
app.use(routes)

// starting the server
AudioParamMap.listen(7000, ()=> {
	console.log("[ Events Server ] => PORT: 7000");
})
