var express = require('express');
var router = express.Router();
var logger= require('../Util/LogUtil').logger()
/* GET home page. */
router.get('/', function(req, res, next) {
  logger.info("@@@@@@@@@@@@@@@@@@@@@@@@@@@111111111111")
  res.render('index', { title: 'Express' });
});

module.exports = router;
