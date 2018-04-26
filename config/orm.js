var connection = require("./connection.js")
var mysql = require("mysql");

connection(mysql);

function selectAll() {
	connection.query('SELECT * from books', function (err, res) {
	  if (err) throw error;
	 
	  console.log(res);
	});
}

function insertOne(bookname) {
	connection.query('INSERT INTO books (book_name) VALUES ( ? )', [bookname], function (err, res) {
		if (err) throw err;
		console.log(bookname + "added to table")
	})
}

function updateOne(bookname) {
	connection.query("UPDATE books SET read_status = 1 WHERE book_name = ?", [bookname], function (err, res) {
		if (err) throw err;
		console.log(bookname + "status updated")
	})
}
