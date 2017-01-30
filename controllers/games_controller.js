
// set dependencies
var express = require('express');
var router = express.Router();

// Dependencies
var models  = require('../models');

// extract our sequelize connection from the models object, to avoid confusion
var sequelizeConnection = models.sequelize

// define routes

// Gameplay Route
router.get('/', function (req, res) {

	var gameObj = {
	'tiles': '',
	'detectives': '',
	'thiefs': '',
	'cards': '',
	'card_types': '',
	'sounds': '',
	'crime_scenes': '',
	'thief_spaces': ''
	};


	models.Tile.findAll({order: ['x1', 'y1'],  include: [ models.Environment, models.Building ]})
	.then(function(tiles){
		var tilesArr = {tilesObject: tiles};
		console.log(tilesArr);
		gameObj = {tiles: tilesArr};
	})

	.then(function(){
		models.Detective.findAll()
		.then(function(detectives){
			var detectivesArr = {detectiveObject: detectives};
			//console.log(detectivesArr);
			gameObj.detectives = detectivesArr;
		})	
	})
	.then(function(){
		models.Thief.findAll()
		.then(function(thiefs){
			var thiefsArr = {thiefObject: thiefs};
			//console.log(thiefsArr);
			gameObj.thiefs = thiefsArr;
		})	
	})
	.then(function(){
		models.Card.findAll( {include: [ models.Cardtype]})
		.then(function(cards){
			var cardsArr = {cardObject: cards};
			//console.log(cardsArr);
			gameObj.cards = cardsArr;
		})	
	})
	.then(function(){
		models.Sound.findAll({include: [ models.Environment]})
		.then(function(sounds){
			var soundsArr = {soundObject: sounds};
			//console.log(soundsArr);
			gameObj.sounds = soundsArr;
		})	
	})
	.then(function(){
		models.Tile.findAll({ where: {environment_id: 5} 
		
		})
		.then(function(crime_scenes){
			var crimeScenesArr = {crimeScenesObject: crime_scenes};
			//console.log(crimeScenesArr);
			gameObj.crime_scenes = crimeScenesArr;
		})	
	})
	.then(function(){
		models.Tile.findAll({ where: {thief_visit: 1} , include: [ models.Environment, models.Building ]
		
		})
		.then(function(thief_spaces){
			var thiefSpacesArr = {thiefSpacesObject: thief_spaces};
			//console.log(thiefSpacesArr);
			gameObj.thief_spaces = thiefSpacesArr;
		})
		.then(function(){
			console.log(gameObj.tiles.tilesObject[0].dataValues);
		res.render('games/index', gameObj);
		})
	})
});





// export router
module.exports = router;
