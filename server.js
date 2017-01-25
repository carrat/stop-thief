// Set dependencies
var express 	= require('express');
var methodOverride	= require('method-override');
var bodyParser 	= require('body-parser');
var logger = require('morgan');

// define controllers
var application_controller = require('./controllers/application_controller.js');
var game_controller = require('./controllers/game_controller.js');

var app = express();

// we bring in the models we exported with index.js
var models = require("./models");
// Set which database connection to use
var env = process.env.NODE_ENV || 'development';
// create server instance

// we set the port of the app
app.set('port', process.env.PORT || 3000);
//import configuration file for database connections
var config = require('./config/config.json')[app.get('env')];

// target static files
app.use('/static', express.static(__dirname + '/public/'));

// Sets up the Express app to handle data parsing 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// override with POST having ?_method=DELETE


app.use(methodOverride('_method'));
//set up handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.use('/', application_controller);
app.use('/game', game_controller);

// we sync the models with our db 
// (thus creating the apropos tables)
models.sequelize.sync().then(function () {
	// set our app to listen to the port we set above
  var server = app.listen(app.get('port'), function() {
  	// then save a log of the listening to our debugger.
    console.log('Express server listening on port ' + server.address().port);
  });
});

