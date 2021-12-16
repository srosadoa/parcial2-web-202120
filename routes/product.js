var express = require('express');
const { getProducts } = require('../controllers/product');
var router = express.Router();

/* GET products listing. Please establish connection with getProduct function from controllers/product.js  */
router.get('/', function (req, res, next) {
  const resp = productController.getProducts(req.query.q);
  res.send(resp);
});

module.exports = router;