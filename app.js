const logger = require('./utils/logger');
require ('./utils/capitalize.js');

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
	res.send('Valor de ABC=' + req.query.abc);
});

app.get("/hola/:name", (req, res) => {
	// get the URL parameters passed by
	// query with req.query
	//const queries = req.query;
	var salida = 'Hola, ' + req.params.name.capitalize();
	logger.info(salida);
	res.send(salida);
});

// listen for connections
app.listen(PORT, () => {
	console.log(`server is listening at port:${PORT}`);
});
