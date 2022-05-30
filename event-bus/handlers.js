const axios = require('axios')

// events handler
exports.events = async (req, res) => {
	try {
		// get the data fields from the body
		const event = req.body;

		// send the event to all services
		axios.post("https://localhost:3000/events", event)
		axios.post("https://localhost:4000/events", event)
		axios.post("https://localhost:5000/events", event)

		// send back the response
		res.status(200).send({ "message": "OK" })
	} catch (error) {
		res.status(500).send(error);
	}
}