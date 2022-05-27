// set up modules
const fs = require('fs');
const path = require('path');

// global variable
const dataPath = path.join(__dirname, '..', '..', 'data', 'posts.json')

// list all comments
exports.listAllComments = async (req, res) => {
	try {
		// read the data and send it
		fs.readFile(dataPath, (err, data) => {
			if (err) return res.sendStatus(500);
			const { id } = req.params;
			let dataJson = JSON.parse(data);
			let dataSent = {};
			for (let i = 0; i < dataJson.length; i++) {
				if (dataJson[i].id == id)
				dataSent = dataJson[i]
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
		const { id } = req.params;

		// check if the body is not empty
		if (!author || !text)
			return res.status(401).json({ "message": "empty body" })

		// read then write the data
		fs.readFile(dataPath, (err, data) => {
			if (err) return res.sendStatus(500);
			let dataJson = JSON.parse(data);

			for (let i = 0; i < dataJson.length; i++) {
				if (dataJson[i].id == id)
					dataJson[i].comments.push({ "author": author, "text": text })
			}

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