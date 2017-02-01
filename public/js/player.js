// Initialize variables
var tiles; //array of tiles

// Place marker on board
function placeMarker(prevSpace, space, x, y, marker, color) {
	$('#' + space).html("<img src='/static/images/markers/" + marker + ".png' class='marker' width='50px' height='50px' style='border: 4px solid " + color + "'>");
	$('#' + prevSpace).empty();
	game.detective.location.id = space;
	game.detective.location.x = x;
	game.detective.location.y = y;
}

//Let player choose their detective
function chooseDetective() {

	detectiveSelected = $(this).attr('id');
	game.detective.id = detectives[detectiveSelected].id;
	game.detective.name = detectives[detectiveSelected].name;
	game.detective.image = detectives[detectiveSelected].image;

};

// Let player choose their color
function chooseColor() {
	colorSelected = $(this).attr('id');
	game.detective.color = colorSelected
};

//Player Turn Actions
function loadPlayerTurn() {

	if (playerChoice === 1) {
		rollDice(x, y)
	}

	else if (playerChoice === 2) {

	}
	else if (playerChoice === 3) {

	}

};

// Get Random Integer
function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

// Calculate Moveable spaces where x and y = current location
function findSpaces(roll) {
	console.log(roll);

	for (i=1; i<1444;i++) {
		if ( (Math.abs(parseInt(game.detective.location.x)-3) + Math.abs(parseInt(game.detective.location.y)-3)) <= roll) {
			// set tile to active
		}
	}

	$('.tile').on('click', movePlayer);
};

function movePlayer() {

	console.log("Move Player");

	tileSelected = $(this).attr('id');
	tileX = $(this).attr('data-x');
	tileY = $(this).attr('data-y');
	tileActive = $(this).attr('data-active');

	if (tileActive === true) {
		placeMarker(game.detective.location.id, tileSelected, tileX, tileY, game.detective.id, game.detective.color);
	}
	else {
		placeMarker(game.detective.location.id, tileSelected, tileX, tileY, game.detective.id, game.detective.color);
	}
};

// Adjust Bank Account
function deposit(player, bank, amount) {
	game.bank = parseInt(game.bank) + parseInt(amount);
	$('.bankMoney').html('$' + game.bank);
};

function withdrawal(player, bank, amount) {
	game.bank = parseInt(game.bank) - parseInt(amount);
	$('.bankMoney').html('$' + game.bank);
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


// End Turn
function endTurn() {

	;
}






