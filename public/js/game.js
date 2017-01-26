
// require dependencies

var mysql = require('mysql');

var connection = mysql.createConnection({
	host: '127.0.0.1',
	port: 3306,
	user: 'root',
	password: 'password',
	database: 'stop_thief_db'
})



// initialize game variables

var game = {
	'player': ,
		'detective': ,
		'thief': ,
		'turn': 0,
		'crimes': [],
		'bank': 1000,
		'cards': [],
		'clues': []
};


//Save Game
function saveGame(game) {

	

};

// Get a hint
function getHint() {



};

// Load instructions
function loadInstructions() {



};

// Show Game's History
function showHistory() {




};

// start new game
function newGame(player) {
	// clear game object

	game = {
		'player': ,
		'detective': ,
		'thief': ,
		'turn': 0,
		'crimes': [],
		'bank': 1000,
		'cards': [],
		'clues': []
	};

	// let player choose detective


	// draw sleuth cards


	// select thief


	// commit crime


	// player turn


}


