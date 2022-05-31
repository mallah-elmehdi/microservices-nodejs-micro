// set up modules
const fs = require('fs');
const path = require('path');
const { randomBytes } = require('crypto')
const axios = require('axios');

// global variable
const dataPath = path.join(__dirname, '..', '..', 'data', 'query.json')

// list all comments
exports.getPosts = async (req, res) => {
	try {
		// read the data and send it
		fs.readFile(dataPath, (err, data) => {
			if (err) return res.sendStatus(500);
			const { postId } = req.params;
			let dataJson = JSON.parse(data);
			let dataSent = [];
			for (let i = 0; i < dataJson.length; i++) {
				if (dataJson[i].postId == postId)
					dataSent.push(dataJson[i])
			}
			res.status(200).json(dataSent);
		})
	} catch (error) {
		res.status(500).json(error);
	}
}

// create post
exports.events = async (req, res) => {
	try {
		const { type, data } = req.body;

		if (type == 'postCreated') {

			// adding the comments array to data
			data.comments = []

			// read then write the data
			fs.readFile(dataPath, (err, data) => {
				if (err)
					return res.sendStatus(500);

				// update the data
				let dataJson = JSON.parse(data);
				dataJson.push(data);

				// write the data
				fs.writeFile(dataPath, JSON.stringify(dataJson), (err) => {
					if (err) return res.sendStatus(500);
				})
			})

		}

		else if (type == 'commentCreated') {

			// read then write the data
			fs.readFile(dataPath, (err, data) => {
				if (err)
					return res.sendStatus(500);

				// update the data
				let dataJson = JSON.parse(data);
				for (let i = 0; i < dataJson.length; i++) {
					if (dataJson[i].postId == data.postId)
						dataJson[i].comments.push(data)
				}

				// write the data
				fs.writeFile(dataPath, JSON.stringify(dataJson), (err) => {
					if (err) return res.sendStatus(500);
				})
			})

		}

		return res.sendStatus(200);
	} catch (error) {
		res.status(500).send(error);
	}
}

// events handler
exports.events = (req, res) => {
	try {
		console.log("event : ", req.body.type);
		res.sendStatus(200)
	} catch (error) {
		res.status(500).send(error);
	}
}