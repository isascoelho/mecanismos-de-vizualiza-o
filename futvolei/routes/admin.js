var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin', { title: 'Adm' });
});

// listar arenas de futvôlei
router.get('/arenas', function(req, res) {
  res.render('arenas', { title: 'Arenas de Futvôlei' });
});

// cadastrar nova arena
router.get('/nova', function(req, res) {
  res.render('nova', { title: 'Cadastrar Arena' });
});

module.exports = router;