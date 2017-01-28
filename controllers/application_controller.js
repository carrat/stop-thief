
// set dependencies
var express = require('express');
var router = express.Router();

// Dependencies
var models  = require('../models/gameboard.js');

// define routes
router.get('/', function (req, res) {


	res.render('index', res);
});
// export router
module.exports = router;
