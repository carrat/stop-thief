// initialize game variables
var game = {
		'player': 1,
		'detective': {'id': '6',
				'name': 'Sheerluck Homes',
				'color': 'blue',
				'location': {'id': '95',
							'x': '',
							'y': ''
							}
				},
		'thief': {'id': '',
				'name': '',
				'bounty': '',
				'location': {'space': '',
							'x': '',
							'y': ''
							}
				},
		'turn': 0,
		'crimes': [],
		'bank': 300,
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

// Play Sound
function playSound(id) {


};

// start new game
function newGame(player) {
	// clear game object
	game = {
		'player': 1,
		'detective': {'id': '6',
				'name': 'Sheerluck Homes',
				'color': 'blue',
				'location': {'id': '95',
							'x': '',
							'y': ''
							}
				},
		'thief': {'id': '',
				'name': '',
				'bounty': '',
				'location': {'space': '',
							'x': '',
							'y': ''
							}
				},
		'turn': 0,
		'crimes': [],
		'bank': 300,
		'cards': [],
		'clues': []
	};

	// let player choose detective


	// draw sleuth cards
	drawCards(2);
	// select thief
	selectThief();
	// commit crime
	chooseCrimeScene();
	// player turn
	loadPlayerTurn();
}


function drawCards(number) {

	var currentURL = window.location.origin;

	$.get(currentURL + '/games/drawcards', function (data) {
		// draw a random number of cards based on the number needed
		for (i=1; i<=number; i++) {
			var myCard = getRandomInt(0, (data.length-1));
			var sleuthButton = $('<button>');
			sleuthButton.addClass('sleuthCardButton');
			sleuthButton.attr('type', 'button');
			sleuthButton.attr('id', 'sleuth-' + data[myCard].id);
			sleuthButton.attr('data-cardtype', data[myCard].cardtype_id);
			sleuthButton.attr('data-action', data[myCard].action_number);
			sleuthButton.text(data[myCard].card_text);
			$('#currentSleuthCards').append(sleuthButton);
			game.cards.push(myCard);
		}
	})
};


function selectThief() {

	var currentURL = window.location.origin;

	$.get(currentURL + '/games/selectthief', function (data) {
		// select a thief randomly
		var myThief = getRandomInt(0, (data.length-1));
		var thiefImg = $('<img>');
		thiefImg.addClass('thief_card');
		thiefImg.attr('src', '/static/images/thiefs/' + data[myThief].id + '.png');
		$('#currentThief').html(thiefImg);
		game.thief.id = data[myThief].id;
		game.thief.name = data[myThief].thief_name;
		game.thief.bounty = data[myThief].bounty;
	})
};

function chooseCrimeScene() {

	var currentURL = window.location.origin;

	$.get(currentURL + '/games/crimescene', function (data) {
		console.log(data);
		// select the first crime scene randomly
		var myCrime = getRandomInt(0, (data.length-1));
		var crimeObj = {'tile_id': data[myCrime].id,
						'building_id': data[myCrime].building_id,
						'building': data[myCrime].building.building_name,
						'space': data[myCrime].space}
		game.thief.location.space = data[myCrime].space;
		game.thief.location.x = data[myCrime].x1;
		game.thief.location.y = data[myCrime].y1;
		game.crimes.push(crimeOnj)
	})
	.done(function (data) {
		commitCrime(game.thief.location.space);
	});;
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
newGame(1);


