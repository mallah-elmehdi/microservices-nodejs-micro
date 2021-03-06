// set up modules
const express = require('express');
const handlers = require('./handlers');

// creat a route
const router = express.Router();

// create post and list all posts request
router
	.route('/posts')
	.get(handlers.listAllPosts)
	.post(handlers.createPost);

router
	.route('/events')
	.post(handlers.events);

// exports the router
module.exports = router;
