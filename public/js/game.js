
// require dependencies
// require connection

// initialize game variables

var game = {
	'player': 'Andrew',
	'detective': {'id': '',
				  'name': '',
				  'image':''},
	'thief': {'id': '',
			  'name': '',
			  'image':'',
			  'bounty': ''},
	'turns': 0,
	'crimes': [],
	'bank': 1000,
	'cards': [],
	'clues': [],
	'thief_location': {'id': '',
						'x': '',
						'y': ''},
	'player_location': {'id': '',
						'x': '',
						'y': ''}
};




//Save Game
function saveGame(game) {

	

};

// Get a hint
function getHint() {



};

// draw starting sleuth cards
function getSleuthCards() {

	for (i=1; i<=3; i++) {
		var myCard = getRandomInt(0, 12);
			games.cards.push(myCard);
	}
};

// drandomly select thief
function selectThief() {

	var myThief = getRandomInt(0, 12);

	thiefSelected = thiefs[myThief];
	game.thief.id = thiefs[thiefSelected].id;
	game.thief.name = thiefs[thiefSelected].name;
	game.thief.image = thiefs[thiefSelected].image;
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
	'player': 'Andrew',
	'detective': {'id': '',
				  'name': '',
				  'image':''},
	'thief': {'id': '',
			  'name': '',
			  'image':'',
			  'bounty': ''},
	'turns': 0,
	'crimes': [],
	'bank': 1000,
	'cards': [],
	'clues': [],
	'thief_location': {'id': '',
						'x': '',
						'y': ''},
	'player_location': {'id': '',
						'x': '',
						'y': ''}
	};

	// let player choose detective
	chooseDetective();


	// draw sleuth cards
	getSleuthCards();


	// select thief
	selectThief();


	// commit crime
	commitCrime();


	// player turn
	loadPlayerTurn();

}


