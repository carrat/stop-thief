// include orm file
var orm = require('../config/orm.js');

//define listmaker model
var gameboard = {
	selectAllTiles: function (cb) {
		orm.selectAllTiles(function (res) {
			cb(res);
		});
	}
};

//export listmaker model
module.exports = gameboard;
