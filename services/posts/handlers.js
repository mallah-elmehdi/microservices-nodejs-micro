// set up modules
const fs = require('fs');
const path = require('path');
const { randomBytes } = require('crypto');
const axios = require('axios');

// global variable
const dataPath = path.join(__dirname, '..', '..', 'data', 'posts.json')

// list all posts
exports.listAllPosts = async (req, res) => {
	try {
		// read the data and send it
		fs.readFile(dataPath, (err, data) => {
			if (err) return res.sendStatus(500);
			let dataJson = JSON.parse(data);

			res.status(200).json(dataJson);
		})
	} catch (error) {
		res.status(500).json(error);
	}
}

// create post
exports.createPost = async (req, res) => {
	try {
		// get the data fields from the body
		const { title, text } = req.body;
		const id = randomBytes(4).toString('hex');

		// check if the body is not empty
		if (!title || !text)
			return res.status(401).json({ "message": "empty body" });

		// read then write the data
		fs.readFile(dataPath, (err, data) => {
			if (err) return res.sendStatus(500);
			let dataJson = JSON.parse(data);
			dataJson.push({
				id,
				title,
				text,
			});

			// write the data
			fs.writeFile(dataPath, JSON.stringify(dataJson), (err) => {
				if (err) return res.sendStatus(500);
			})
		})
		await axios.post('http://localhost:7000/events', {
			type: 'postCreated',
			data: {
				id,
				title,
				text,
			}
		})
		return res.sendStatus(200)
	} catch (error) {
		res.status(500).json(error);
	}
}

// events handler
exports.events = (RE, ) => {
	try {
		console.log("hjaSAJKDKSLVX");
		console.log("event : ", req.body.type);
		res.sendStatus(200)
	} catch (error) {
		res.status(500).send(error);
	}
}