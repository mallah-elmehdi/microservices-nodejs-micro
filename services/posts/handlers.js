// set up modules
const fs = require('fs');
const path = require('path');

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
		const {
			title,
			text
		} = req.body;

		// check if the body is not empty
		if (!title || !text)
			return req.status(401).json({
				"message": "empty body"
			})

		// read then write the data
		fs.readFile(dataPath, (err, data) => {
			if (err) return res.sendStatus(500);
			let dataJson = JSON.parse(data);
			dataJson.push({
				"title": title,
				"text": text
			});

			// write the data
			fs.writeFile(dataPath, JSON.stringify(dataJson), (err) => {
				if (err) return res.sendStatus(500);
			})
		})

		return res.sendStatus(200);
	} catch (error) {
		res.status(500).send(error);
	}
}