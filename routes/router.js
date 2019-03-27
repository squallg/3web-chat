/*
 * router.js file. This controller manage all the application routes.
 */


/********************************* IMPORTS ***********************************/

//General imports
var express = require('express');
var router = express.Router();

//Controlers imports
var index = require('../controllers/index');
var chat = require('../controllers/chat');

/*****************************************************************************/


/********************************* ROUTES ************************************/

/* GET home page. */
router.get('/', function(req, res, next) {
  index.render(res);
});

/* GET chat page. */
router.get('/chat', function(req, res, next) {
  chat.render(res);
});


module.exports = router;

/*****************************************************************************/