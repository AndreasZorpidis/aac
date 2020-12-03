var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'AAC - 3D Force-Directed Graph' });
});

module.exports = router;
