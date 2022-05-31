// set up modules
const express = require('express');
const handlers = require('./handlers');

// creat a route
const router = express.Router();

// create comment and list all commenets request
router
	.route('/posts')
	.get(handlers.getPosts)

router
	.route('/events')
	.post(handlers.events);

// exports the route
module.exports = router;