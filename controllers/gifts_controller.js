
// set dependencies
var express = require('express');
var router = express.Router();

// Dependencies
var models  = require('../models');

var newGift;

// define routes
router.get('/', function (req, res) {

	models.Gift.findAll({})
	.then(function(gifts){
		var giftArr = {giftObject: gifts};
		console.log(giftArr);
		console.log(giftArr.giftObject[0].dataValues.gift_name);
		res.render('gifts/index', giftArr);
	});
});

router.post('/create', function (req, res) {
	var gift = req.body; // set request to variable
// create new instance of model gift
	models.Gift.create(
		{
			gift_name: gift.name,
			gift_icon: gift.icon
		}
	).then(function(){
		res.redirect('/gifts')
	});
});

// export router
module.exports = router;
