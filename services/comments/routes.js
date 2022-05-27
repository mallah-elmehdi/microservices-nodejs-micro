// set up modules
const express = require('express');
const handlers = require('./handlers');

// creat a route
const router = express.Router();

// create comment and list all commenets request
router
	.route('/posts/:id/comments')
	.get(handlers.listAllComments)
	.post(handlers.createComment);

// exports the route
module.exports = router;