
// require dependencies

//var mysql = require('mysql');

//var connection = mysql.createConnection({
//	host: '127.0.0.1',
//	port: 3306,
//	user: 'root',
//	password: 'password',
//	database: 'stop_thief_db'
//})



// initialize game variables

var game = {
	'player': '',
		'detective': '',
		'thief': '',
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
		'player': '',
		'detective': '',
		'thief': '',
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


function buildGameboard() {

	for (i=1; i<38; i++) {
		$(".inner_gameboard").append("<div class='row gameboard_row' id='row'" + i + "'</div><div class='col-sm-12 gameboard_col'></div></div>");

		for (j=1; j<38; j++) {
			var newDiv = document.createElement("div");
    		$(newDiv).attr("class", "tile");
    		$(newDiv).text(i);
    		$("#row" + i).append(newDiv);
		}
	}

}

buildGameboard();


