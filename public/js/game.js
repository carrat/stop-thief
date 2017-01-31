
// require dependencies
// require connection

// initialize game variables

var game = {
		'player': 1,
		'detective': {'id' = '6',
				'name' = 'Sheerluck Homes'
				},
		'thief': {'id' = '10',
				'name' = 'The Brain',
				'bounty' = '1000'
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

// Show Game's History
function showHistory() {




};

// start new game
function newGame(player) {
	// clear game object

	game = {
		'player': 1,
		'detective': {'id' = '6',
				'name' = 'Sheerluck Homes'
				},
		'thief': {'id' = '10',
				'name' = 'The Brain',
				'bounty' = '1000'
				},
		'turn': 0,
		'crimes': [],
		'bank': 300,
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


function displayGameboard() {

	connection.query('SELECT * FROM tiles ORDER BY tile_id', function(err, res) {       
        if(err) {
		console.log(err);
		}
		else {
            for (z=0; z<res.length; z++) {

            	for (i=1; i<38; i++) {
					$(".inner_gameboard").append("<div class='row gameboard_row' id='row'" + i + "'</div><div class='col-sm-12 gameboard_col'></div></div>");

					for (j=1; j<38; j++) {
						var newDiv = document.createElement("div");
			    		$(newDiv).attr("class", "tile");
			    		$(newDiv).attr("class", "bg" + res[z].env_type);
			    		$(newDiv).attr("id", res[z].tile_id);
			    		$(newDiv).attr("data-bldg", res[z].building);
			    		$(newDiv).attr("data-space", res[z].space);
			    		$(newDiv).text(res[z].tile_name);
			    		$("#row" + i).append(newDiv);
					}
				}
            }
		}
	});
}

buildGameboard();


