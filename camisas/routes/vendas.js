var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('vendas', { title: 'Página de vendas' });
}); 

// subrota 1
router.get('/camisas', function(req, res) {
  res.render('camisas', { title: 'vizualize nossas camisas disponíveis' });
});

// subrota 2
router.get('/pedido', function(req, res) {
  res.render('pedido', { title: 'Fazer Pedido da camisa' });
});



module.exports = router;
