// set up modules
const fs = require('fs');
const path = require('path');
const { randomBytes } = require('crypto')
const axios = require('axios');

// global variable
const dataPath = path.join(__dirname, '..', '..', 'data', 'comments.json')

// list all comments
exports.listAllComments = async (req, res) => {
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
exports.createComment = async (req, res) => {
	try {
		// get the data fields from the body
		const { author, text } = req.body;
		const { postId } = req.params;
		const id = randomBytes(4).toString('hex');

		// check if the body is not empty
		if (!author || !text)
			return res.status(401).json({ "message": "empty body" })

		// read then write the data
		fs.readFile(dataPath, (err, data) => {
			if (err) return res.sendStatus(500);
			let dataJson = JSON.parse(data);
			dataJson.push({
				id,
				author,
				text,
				postId
			});

			// write the data
			fs.writeFile(dataPath, JSON.stringify(dataJson), (err) => {
				if (err) return res.sendStatus(500);
			})
		})

		await axios.post('http://localhost:7000/events', {
			type: 'commentCreated',
			data: {
				id,
				author,
				text,
				postId
			}
		})

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