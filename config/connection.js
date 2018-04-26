var mysql = require("mysql");
var password = require("./password.js");

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: password,
	database: "reading_list_db"
})

module.exports = function(mysql) {
	connection.connect(function(err) {
		if (err) {
			throw err;
		}
		console.log("connected as id " + connection.threadId);
	})
}
