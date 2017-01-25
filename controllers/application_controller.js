
// set dependencies
var express = require('express');
var router = express.Router();

// Dependencies
var models  = require('../models');

// define routes
router.get('/', function (req, res) {

	/*var chi =  {nice: "None", naughty: "None"};

	models.Child.findAll({ where: {list_id: 1},  include: [ models.Gift ]}
	)
	.then(function(children){
		var niceArr = {niceChildObject: children};
		console.log(niceArr.niceChildObject[0].Gift.dataValues.gift_icon);
		chi.nice = niceArr;
	})
	.then(function(){
		models.Child.findAll({ where: {list_id: 2} 

		})
		.then(function(children){
			var naughtyArr = {naughtyChildObject: children};
			console.log(naughtyArr);
			chi.naughty = naughtyArr;
		})
		.then(function(){	
			console.log(chi);
			console.log(chi.nice.niceChildObject[0].Gift.dataValues.gift_icon);
			res.render('index', chi);
		})	
	})*/
	res.render('index', res);
});
// export router
module.exports = router;
