//Connection with local database configured
var mysql = require("mysql");
//var password = require("./password.js");
var connection;

if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
		host: "localhost",
		port: 3306,
		user: "root",
		password: password,
		database: "reading_list_db"
	});
}

connection.connect(function(err) {
	if (err) throw err;
	console.log("connected as id " + connection.threadId);
})

module.exports = connection;