
// set dependencies
var express = require('express');
var router = express.Router();

// Dependencies
var models  = require('../models/gameboard.js');

var newUser;

// define routes
router.get('/', function (req, res) {
		res.render('index', req);
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
		res.redirect('/games')
	});
});

// export router
module.exports = router;
