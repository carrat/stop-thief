
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
	'thief_spaces': '',
	'myDetective': ''
	};

	models.Tile.findAll({order: ['x1', 'y1'],  include: [ models.Environment, models.Building ]})
	.then(function(tiles){
		var tilesArr = {tilesObject: tiles};
		gameObj = {tiles: tilesArr};
	})

	.then(function(){
		models.Detective.findAll()
		.then(function(detectives){
			var detectivesArr = {detectiveObject: detectives};
			gameObj.detectives = detectivesArr;
		})	
	})
	.then(function(){
		models.Thief.findAll()
		.then(function(thiefs){
			var thiefsArr = {thiefObject: thiefs};
			gameObj.thiefs = thiefsArr;
		})	
	})
	.then(function(){
		models.Card.findAll( {include: [ models.Cardtype]})
		.then(function(cards){
			var cardsArr = {cardObject: cards};
			gameObj.cards = cardsArr;
		})	
	})
	.then(function(){
		models.Sound.findAll({include: [ models.Environment]})
		.then(function(sounds){
			var soundsArr = {soundObject: sounds};
			gameObj.sounds = soundsArr;
		})	
	})
	.then(function(){
		models.Tile.findAll({ where: {environment_id: 5} 
		
		})
		.then(function(crime_scenes){
			var crimeScenesArr = {crimeScenesObject: crime_scenes};
			gameObj.crime_scenes = crimeScenesArr;
		})	
	})
	.then(function(){
		models.Tile.findAll({ where: {thief_visit: 1} , include: [ models.Environment, models.Building ]
		
		})
		.then(function(thief_spaces){
			var thiefSpacesArr = {thiefSpacesObject: thief_spaces};
			gameObj.thief_spaces = thiefSpacesArr;
		})
		.then(function(){
		res.render('games/index', gameObj);
		})
	})
});

// Show all Detectives for choice Route
router.get('/detective', function (req, res) {
	models.Detective.findAll()
	.then(function(detectives){
		var detectivesArr = {detectivesObject: detectives};
		detObj = {detectives: detectivesArr};
		res.render('games/choose', {data: detObj, layout: 'main'});
	})
});

// Select Detective Route
router.get('/selectdetective/:id', function (req, res) {
	models.Detective.findOne( {where: {id: req.params.id}})
	.then(function(detective){
		res.json(detective);
	})
});

// Select Thief Route
router.get('/selectthief', function (req, res) {
	models.Thief.findAll()
	.then(function(thiefs){
		res.json(thiefs);
	})
});

// Select Sleuth Cards
router.get('/drawcards', function (req, res) {
	models.Card.findAll({include: [models.Cardtype]		
	})
	.then(function(cards){
		res.json(cards);
	})
});

// Select Crime Scenes
router.get('/crimescene', function (req, res) {
	models.Tile.findAll({ where: {environment_id: 5} , include: [ models.Environment, models.Building ]
	})
	.then(function(crimescenes){
		res.json(crimescenes);
	})
});

// export router
module.exports = router;
