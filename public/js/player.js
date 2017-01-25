

//Let player choose their detective
function chooseDetective() {


};



//Player Turn Actions


// Player rolls dice 
function rollDice() {


};

// Calculate Moveable spaces
function findSpaces(location, roll) {

};

function movePlayer(start, finish) {


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






