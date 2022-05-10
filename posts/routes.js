// set up modules
const express = require('express');
const handler = require('./handler');

// creat a route
const router = express.Router();

// create post and list all posts request
route
    .route('/')
    .post(handler.listALlPosts)
    .get(handler.creatPost);
