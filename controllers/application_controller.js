
// set dependencies
var express = require('express');
var router = express.Router();

// Dependencies
var models  = require('../models');

// extract our sequelize connection from the models object, to avoid confusion
var sequelizeConnection = models.sequelize

// define routes
router.get('/', function (req, res) {


	res.render('index', {layout: 'home'});
});
// export router
module.exports = router;
