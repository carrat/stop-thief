// include mysql connection data
var connection = require('./connection.js');

// Define default global variables
//var tableName = "children";
//var orderBy = "id";


//define ORM functions
var orm = {
//select all from table
	selectAllTiles: function (cb) {
		connection.query('SELECT * FROM tiles ORDER BY y1, x1',  function(err, res){
			if (err) throw err;
			cb(res);
		});
	},

	selectAllDetectives: function (cb) {
		connection.query('SELECT * FROM detectives',  function(err, res){
			if (err) throw err;
			cb(res);
		});
	},
	selectAllCards: function (cb) {
		connection.query('SELECT * FROM cards',  function(err, res){
			if (err) throw err;
			cb(res);
		});
	},
	selectAllMoney: function (cb) {
		connection.query('SELECT * FROM money',  function(err, res){
			if (err) throw err;
			cb(res);
		});
	}
};

//export ORM functions
module.exports = orm;