'use strict';

const express = require('express');
const notFoundHandler = require('./error-handlers/404.js');
const errorHandler = require('./error-handlers/500.js');
const logger = require('./middleware/logger.js');
const validator = require('./middleware/validator.js');

const app = express();

//global middleware
app.use(express.json());
app.use(logger);

app.get('/person', validator, (req, res) => {
	let name = req.query.name;
	res.json({
		name,
	});
});

app.use('*', notFoundHandler);
app.use(errorHandler);

function start(port) {
	app.listen(port, () => {
		console.log(`Listening on PORT ${port}`);
	});
}

module.exports = {
	app,
	start,
};
