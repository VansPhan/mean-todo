var express = require("express");
var hbs = require("express-handlebars");
var app = express();

app.set("view engine", "hbs");
app.engine(".hbs", hbs({
	extname: ".hbs",
	partialsDir: "views/",
	layoutsDir: "views/",
	defaultLayout: "index"
}));

app.get("/", function(req, res) {
	res.render("index");
})

app.listen(1337, function() {
	console.log("Listening on port 1337");
})