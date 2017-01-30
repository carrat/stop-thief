// Initialize variables

var d1; //dice roll 1
var d2; //dice roll 2
var roll; //dice total
var tiles; //array of tiles
var p1Loc; // tile number of players current location
var tLoc; //tile number of thief's current location 




//Let player choose their detective
function chooseDetective() {

	detectiveSelected = $(this).attr('id');
	game.detective.id = detectives[detectiveSelected].id;
	game.detective.name = detectives[detectiveSelected].name;
	game.detective.image = detectives[detectiveSelected].image;

};



//Player Turn Actions
function loadPlayerTurn() {


};



// Player rolls dice -- x and y = current location where player is when they roll
function rollDice(x, y) {
	d1 = getRandomInt(1, 6);
	d2 = getRandomInt(1, 6);
	roll = d1 + d2;

	findSpaces(x, y, roll);
};

// Get Random Integer

function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

// Calculate Moveable spaces where x and y = current location
function findSpaces(x, y, roll) {

	for (i=1; i<tiles.length;i++) {
		if ( (Math.abs(x-x3) + Math.abs(y-y3)) <= roll) {
			// set tile to active
		}
	}

	$('.tile').on('click', movePlayer);

};

function movePlayer(start, finish) {

	tileSelected = $(this).attr('id');
	tileActive = $(this).attr('data-active');

	if (tileActive === true) {

	}

};

// Adjust Bank Account
function deposit(player, bank, amount) {

};

function withdrawal(player, bank, amount) {

};


//Sleuth Card Actioms

//Draw sleuth Card
function drawCard() {



};

//Play Sleuth Card
function playCard(card) {

	switch(card){
	    case 'getTip': 
	      return getTip();
	      break;
	    case 'goExtra':
	      return goExtra(location, spaces);
	      break;
	    case 'moveAnywhere':
	      return moveAnywhere();
	      break;
	    case 'buyTip':
	      return buyTip();
	      break;
	    case 'returnToAcme':
	      return returnToAcme(player);
	      break;
	    case 'pressClue':
	      return pressClue(number);
	      break;
	    case 'takeAnotherTurn':
	      return takeAnotherTurn(player);
	      break;
	}
};

//Sleuth card mini-functions
function getTip() {

};

function goExtra(location, spaces) {

};

function moveAnywhere() {
	
};

function buyTip() {

};

function returnToAcme(player) {

};

function pressClue(number) {

};

function takeAnotherTurn(player) {

};

//Attempt an arrest
function makeArrest(location) {
	// check if arrest is made in the correct spot
	if (location === game.thief_location) {
		// Pick random number. If random number = 7 then thief narrowly escapes
		var escapeNum;

		if (escapeNum === 7) {
			narrowEscape(location);
		}

		else {
			bookEm(game.player, game.detective, game.thief, game.crimes, game.turns)
		}
	}

	else {
		falseArrest(game.player);
	};
};

// arrest was made in wrong location
function falseArrest(player) {
	playSound(10);


};

// arrest was made in correct location but thief escapes
function narrowEscape(thief_location) {
	playSound(9);

};

// add caught criminal to record
function bookEm(player, detective, thief, crimes, turns) {
	playSound(11);



};

// Play appropriate sound
function playSound(sound) {


};






