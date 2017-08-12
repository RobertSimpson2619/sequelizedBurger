// Grab our models
var db = require("../models");

// Routes
// ==============================================
module.exports = function(app) {

// GET route for getting all the burgers 
app.get("/", function(req, res) {
	db.Burger.findAll({}).then(function(results) {
		var hbsObject = {
			burgers: results
		}

		console.log(hbsObject);
		res.render("index", hbsObject);
	});
});

app.post("/burgers/insertOne", function(req,res) {
	console.log("\n\n\n\n\n\n\n\n\n")
	console.log(req.body);
	db.Burger.create({
		burger_name: req.body.name,
		devoured: false
	}).then(function(results) {
		res.redirect("/");
	});
});

app.post("/burgers/updateOne/:id", function(req, res) {
	db.Burger.update({
		devoured: true,
	}, {
		where: {
			id: req.params.id
		}
	}).then(function(results) {
		res.redirect("/");
	});
});

}