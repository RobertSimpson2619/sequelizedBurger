var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var path = require("path");
var orm = require("./config/orm.js")

var app = express();
var PORT = 3000;



// Serve static content for the app from the "public" directory int he applicaiton directory.
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_mthod=DELETE
app.use(methodOverride("_method"));

// Set Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs ({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);



// orm.selectAll();

app.listen(PORT, function() {
	console.log("Listening on port " + PORT);
});