
// set dependencies
var express = require('express');
var router = express.Router();

// Dependencies
var models  = require('../models');

// extract our sequelize connection from the models object, to avoid confusion
var sequelizeConnection = models.sequelize


// define routes
router.get('/', function (req, res) {

	res.render('index', res, {layout: 'game'});
	
});

router.post('/create', function (req, res) {

// create new instance of model game
	models.Game.create(
		{
			user_id: childName
		}
	)
	
	.then(function(){
		res.redirect('/detective');
	});
});



// export router
module.exports = router;
