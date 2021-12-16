var express = require('express');
const control = require('../controllers/product');
var router = express.Router();

/* GET products listing. Please establish connection with getProduct function from controllers/product.js  */
router.get('/', function (req, res, next) {
  const resp = control.getProducts(req.query.q);
  res.send(resp);
});

module.exports = router;