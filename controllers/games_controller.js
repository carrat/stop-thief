
// set dependencies
var express = require('express');
var router = express.Router();

// Dependencies
var gameboard  = require('../models/gameboard.js');


// define routes
router.get('/games', function (req, res) {
	
	gameboard.selectAllTiles(function (data) {
		var itemsObj = { tiles: data };
		console.log(itemsObj);
		res.render('games/index', itemsObj);
	});
});

router.get('/', function (req, res) {
	
	res.render('index', {layout: 'main2'});

});




// export router
module.exports = router;
