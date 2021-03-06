
// set dependencies
var express = require('express');
var router = express.Router();

// Dependencies
var models  = require('../models');

// extract our sequelize connection from the models object, to avoid confusion
var sequelizeConnection = models.sequelize

var newUser;

// define routes
router.get('/', function (req, res) {
		res.render('index', {layout: 'user'});
});

router.get('/login', function (req, res) {
	var user = req.body; // set request to variable
// create new instance of user
	models.User.findOne({where: {email: user.email, password: user.password}
	})
	.then(function(){
		res.redirect('/games/detective')
	});
});

router.post('/create', function (req, res) {
	var user = req.body; // set request to variable
// create new instance of user
	models.User.create(
		{
			username: user.username,
			email: user.email,
			password: user.password,
			login_status: true
		}
	).then(function(){
		res.redirect('/games/detective')
	});
});

// export router
module.exports = router;
