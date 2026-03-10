var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/sobre', function(req, res, next) {
  res.render('sobre', { title: 'sobre nós' });
});


module.exports = router;
