// Helper method
Object.defineProperty(String.prototype, 'capitalize', {
    value: function() {
      return this.charAt(0).toUpperCase() + this.slice(1);
    },
    enumerable: false
  });


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
	res.send('Hola, ' + req.params.name.capitalize());
});

// listen for connections
app.listen(PORT, () => {
	console.log(`server is listening at port:${PORT}`);
});
