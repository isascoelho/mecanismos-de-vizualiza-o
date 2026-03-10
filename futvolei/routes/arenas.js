var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('arenas', { title: 'ARENAS' });
});

router.get('/agendamentos', function(req, res, next) {
  res.render('agendamentos', { title: 'você está agendamentos' });
});

module.exports = router;