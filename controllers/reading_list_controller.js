var express = require("express");

var router = express.Router();

var book = require("../models/books.js");

//url handlers which use the model functions from book.js file
//to handle requests to the database from the html and render the 
//correct information
router.get("/", function(req, res) {
	book.selectAll(function(data) {
		var hbsObject = {
			books: data
		};
		res.render("index", hbsObject);
	});
});

router.post("/add", function(req, res) {
	book.insertOne([
		"book_name", "author"
	], [
		req.body.title, req.body.author
	], function(result) {
		res.json({ id: result.insertId})
	});
});

router.put("/update/:id", function(req, res) {
	var condition = "id = "  + req.params.id;

	book.updateOne({
		read_status: req.body.read_status
	}, condition, function(result) {
		if (result.changedRows === 0) {
			return res.status(404).end();
		} else {
			res.status(200).send();
		}
	});
});

router.delete("/delete/:id", function(req, res) {
	var condition = "id = " + req.params.id;
	book.deleteOne(condition, function(result) {
		if (result.affectedRows === 0) {
			return res.status(404).send();
		} else {
			res.status(200).send();
		}
	})
})

module.exports = router;