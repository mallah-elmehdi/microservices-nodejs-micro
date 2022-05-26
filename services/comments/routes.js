// set up modules
const express = require('express');
const handler = require('./handler');

// creat a route
const router = express.Router();

// create post and list all posts request
route
    .route('/posts')
    .post(handler.listALlPosts)
    .get(handler.creatPost);

// create comment and list all commenets request
route
    .route('/comments')
    .post(handler.listALlComments)
    .get(handler.creatComment);

// exports the route
module.exports = route;
