var express = require("express");
var bodyParser = require("body-parser");
var PORT = process.env.PORT || 3000;
var app = express();

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.use(express.static(__dirname + "/public"));

app.use(express.static("."));

var exphbs = require("express-handlebars");
// var mysql = require("mysql");

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

var routes = require("./controllers/reading_list_controller.js")

app.use(routes);

// var password = require("./config/password.js");

// var connection = mysql.createConnection({
// 	host: "localhost",
// 	port: 3306,
// 	user: "root",
// 	password: password,
// 	database: "reading_list_db"
// })

// connection.connect(function(err) {
// 	if (err) throw err;
// 	console.log("connected as id " + connection.threadId);
// });

// app.get("/", function(req, res) {
// 	connection.query('SELECT * from books', function (err, data) {
// 	  if (err) throw error;
	 
// 	  var toRead = [];
// 	  var finished = [];

// 	  for (i=0; i < data.length; i++) {
// 	  	if (data[i].read_status === 0) {
// 	  		toRead.push(data[i]);
// 	  	} else {
// 	  		finished.push(data[i]);
// 	  	}
// 	  }

// 	  var sortedBooks = {
// 	  	toRead: toRead,
// 	  	finished: finished
// 	  }

// 	  res.render("index", {books: sortedBooks})
// 	});
// })

// app.post("/add", function(req, res) {
// 	newBook = req.body;
// 	//console.log(newBook);

// 	connection.query('INSERT INTO books SET ?', 
// 	{
// 		book_name: newBook.title,
// 		author: newBook.author
// 	}, function (err, res) {
// 		if (err) throw err;
// 		console.log(newBook.title +" by " + newBook.author + " added to database")
// 	})
// 	res.status(200).send();
// })

// app.put("/update/:id", function (req, res) {
// 	var id = req.params.id;
// 	connection.query("UPDATE books SET read_status = 1 WHERE id = ?", [id], function(err, result){
// 		if (err) {
// 			return res.status(500).end();
// 		}
// 		console.log("Book id " + id + " marked as read");
// 		res.status(200).send();
// 	})
// })

// app.delete("/delete/:id", function(req, res) {
// 	var id = req.params.id;
// 	connection.query("DELETE FROM books WHERE id = ?", [id], function(err, result){
// 		if (err) {
// 			return res.status(500).end();
// 		}
// 		console.log("Book with id " + id + "deleted") 
// 		res.status(200).send()
// 	})
// })

app.listen(PORT, function() {
	console.log("Server listening on: http://localhost:" + PORT);
});