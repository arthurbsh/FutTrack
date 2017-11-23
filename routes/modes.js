var express = require('express');
var router = express.Router();
var GameController = require('../controllers/GameModeController');
var gameController = new GameController.GameModeController();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  gameController.getGameModes(function (list) {
      res.send(JSON.stringify(list));
  });

});

/* GET users listing. */
router.get('/current', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    gameController.getGameModes(function (list) {
        res.send(JSON.stringify(list));
    });

});

module.exports = router;
