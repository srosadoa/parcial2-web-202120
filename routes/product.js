var express = require('express');
const { getProducts } = require('../controllers/product');
var router = express.Router();

/* GET products listing. Please establish connection with getProduct function from controllers/product.js  */
router.get('/', function (req, res, next) {
  var query = req.query.q;
  const resp = productController.getProducts(query);
  res.send(resp);
});

module.exports = router;