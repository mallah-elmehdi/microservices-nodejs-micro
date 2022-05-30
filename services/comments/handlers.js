// set up modules
const fs = require('fs');
const path = require('path');

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

		// check if the body is not empty
		if (!author || !text)
			return res.status(401).json({ "message": "empty body" })

		// read then write the data
		fs.readFile(dataPath, (err, data) => {
			if (err) return res.sendStatus(500);
			let dataJson = JSON.parse(data);
			const id = randomBytes(4).toString('hex');
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

		return res.sendStatus(200);
	} catch (error) {
		res.status(500).send(error);
	}
}