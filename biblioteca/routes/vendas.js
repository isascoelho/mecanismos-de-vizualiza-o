var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('vendas', { title: 'Brownie House' });
});

// subrota 1
router.get('/brownies', function(req, res) {
  res.render('brownies', { title: 'Nossos Brownies' });
});

// subrota 2
router.get('/pedidos', function(req, res) {
  res.render('pedidos', { title: 'Fazer Pedido' });
});

module.exports = router;