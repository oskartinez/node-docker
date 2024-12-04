const logger = require('./utils/logger');
require ('./utils/capitalize.js');
var os = require("os");
const fs = require('fs');

// Start a express server

// create an express object
const app = require("express")();

// server port
const PORT = 8080;

// using queries
app.get("/api", (req, res) => {
	// get the URL parameters passed by
	// query with req.query
	//const queries = req.query;
	var salida = 'Valor de ABC=' + req.query.abc;
	logger.info(salida);
	res.send(salida);
});

app.get("/hola/:name", (req, res) => {
	// get the URL parameters passed by
	// query with req.query
	//const queries = req.query;
	var salida = 'Hola, ' + req.params.name.capitalize();
	logger.info(salida);
	res.send(salida);
});

app.get("/hostname", (req,res) => {
	var hostname = os.hostname();
	res.send(hostname);
});

app.get("/logs", (req,res) => {
	const directoryPath = './logs';

	// Use fs.readdirSync to read the contents of the directory synchronously
	const fileList = fs.readdirSync(directoryPath);
	console.log('Files and folders in the directory:', fileList);
	res.send(fileList);

});

// listen for connections
app.listen(PORT, () => {
	console.log(`server is listening at port:${PORT}`);
});
