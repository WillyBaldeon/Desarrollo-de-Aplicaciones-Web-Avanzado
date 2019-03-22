var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET inicio. */
router.get('/inicio', function(req, res, next) {
  res.render('inicio', { title: 'TECSPORTs' });
});

/* GET galeria. */
router.get('/galeria', function(req, res, next) {
  res.render('galeria', { title: 'Galería de Fotos' });
});

module.exports = router;
