var express = require('express');
var router = express.Router();
var MatchesController = require('../controllers/MatchController');
var matchController = new MatchesController.MatchController();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  matchController.getMatches(function (list) {
      res.send(JSON.stringify(list));
  });

});

/* GET users listing. */
router.get('/current', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    matchController.getMatches(function (list) {
        res.send(JSON.stringify(list));
    });

});

module.exports = router;
