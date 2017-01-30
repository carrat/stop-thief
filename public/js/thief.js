

//Calculate spaces thief can move to
function findThiefSpaces(location) {

	var possibleMoves = [];

	// run formula to determine all possible moves and load them to array


	// take array and randomly pick where thief will land
	var finish = thiefLanding(location, possibleMoves);

	//move thief to new location
	thiefMove(location, finish);
};

//Choose thief's move
function thiefLanding(location, possibleMoves) {

	var landingSpot;

	//if (landingSpot is an active crime scene, thief chooses that landing spot) {



	//}
	//otherwise andomly generate thief landing spot from possible locations
	//else {

	//}
};

//Move the thief
function thiefMove(start, finish) {

	// update thief's location in variable

	// get landing spot from database

	var newLocation = finish.tile_id;

	// play sound for clue based on landing spot

	//if (finish.environment_id === 5 && finish.tile_id NOT IN crimes array) {
		commitCrime(finish.tile_id);
	//}

	//else {
		playSound(finish.environment_id);
	//}
};

// Thief is going to commit a crime
function commitCrime() {
	// play sound for crime scene
	playSound(5);

	//display modal with crime street or building location


}

// record turn in log
function addTurn(pawn, start, finish, environment) {

	var turn = {
		'pawn': pawn,
		'start': starting_location,
		'end': end_location,
		'type': environment_type
	};

	myGame.turns.push(turn);
};



