

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
function thiefMove(start, finishID, finishSpace, finishEnv) {

	// update thief's location in variable
	game.thief.location.id = finishID;
	game.thief.location.space = finishSpace;
	// play sound for clue based on landing spot
	playSounds(sounds.)

	if (finishEnv === 5) {
		commitCrime(finishSpace);
	}
	else {
		playSound(finishEnv);
		// launch modal for clue
		launchModal(finishEnv);
		// update the clues record
		var newClue = {'space': finishSpace,
						'clue': finishEnv
					}
		game.clues.push(newClue); // push new clue to crime scanner history
	}
};

// launch a modal to display the clue information
function launchModal(clue) {



};

// Thief is going to commit a crime
function commitCrime(space) {
	// play sound for crime scene
	playSound(5);
	//display modal with crime street or building location


}

// record turn in log
function addTurn(pawn, start, finish, environment) {

	var turn = {
		'pawn': pawn,
		'start': start,
		'end': finish,
		'type': environment
	};

	game.turns.push(turn);
};



