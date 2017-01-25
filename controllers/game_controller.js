
// set dependencies
var express = require('express');
var router = express.Router();

// Dependencies
var models  = require('../models');

// extract our sequelize connection from the models object, to avoid confusion
var sequelizeConnection = models.sequelize


// Update game object
myGame = {
	'player': ,
	'detective': ,
	'thief': ,
	'turn': 0,
	'crimes': [],
	'bank': 1000,

};


// define routes
router.get('/', function (req, res) {

	/*var chi =  {nice: "None", naughty: "None"};

	models.Child.findAll({ where: {list_id: 1} 
		
	})
	.then(function(children){
		var niceArr = {niceChildObject: children};
		console.log(niceArr);
		chi = {nice: niceArr};
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
			res.render('index', chi);
		})	
	})*/
	
});

router.post('/create', function (req, res) {
	var childName = req.body.name; // set request to variable
	var giftVal = req.body.gift; // set request to variable
// create new instance of model child
	models.Child.create(
		{
			child_name: childName,
			list_id: 1,
			gift_id: giftVal
		}
	)
	.then(function(child){
		newChild = child;
	})
	.then(function(){
		return models.Gift.findOne({ 
			where: {id: giftVal} 
		});
	})
	.then(function(gift){
		newChild.setGift(gift);
	})
	.then(function(){
		return models.List.findOne({ 
			where: {id: 1} 
		});
	})
	.then(function(list){
		newChild.setList(list);
	})
	.then(function(){
		res.redirect('/');
	});
});

router.post('/naughty/:id', function (req, res) {

	// Take the request...
	var childID = req.params.id;
	console.log("Naughty Child: " + childID)

	models.Child.update({
	  list_id: 2
	}, {
	  where: {
	    id: {
	      $eq: childID
	    }
	  }
	})
	.then(function(){
		res.redirect('/')
	});
});

router.post('/nice/:id', function (req, res) {
	// Take the request...
	var childID = req.params.id;

	models.Child.update({
	  list_id: 1
	}, {
	  where: {
	    id: {
	      $eq: childID
	    }
	  }
	})
	.then(function(){
		res.redirect('/')
	});
});

router.delete('/delete/:id', function (req, res) {
	// Take the request...
	var childID = req.params.id;

	models.Child.destroy({
	  where: {
	    id: {
	      $eq: childID
	    }
	  }
	})
	.then(function(){
		res.redirect('/')
	});
});

router.post('/assign/:child/:gift', function (req, res) {
	var child = req.params.child; // set request to variable
	var gift = req.params.gift; // set request to variable

	models.Child.findOne({
		where: {
			id: child
		}
	})
	.then(function(result){
		Child.setGift(result);

	})
	.then(function(){
		res.redirect('/')
	});
});


// export router
module.exports = router;
