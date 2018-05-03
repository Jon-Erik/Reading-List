var orm = require("../config/orm.js");

//models using the orm.js file to connect those functions with the books DB
var book = {
	selectAll: function(cb) {
		orm.selectAll("books", function(res) {
			cb(res);
		});
	},

	insertOne: function(cols, vals, cb) {
		orm.insertOne("books", cols, vals, function(res) {
			cb(res);
		});
	},

	updateOne: function(objColVals, condition, cb) {
		orm.updateOne("books", objColVals, condition, function(res) {
			cb(res);
		});
	},

	deleteOne: function(condition, cb) {
		orm.deleteOne("books", condition, function(res) {
			cb(res);
		})
	}
}

module.exports = book;