var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('livros', { title: 'Escolha o melhor tema de livro para você' });
});



module.exports = router;