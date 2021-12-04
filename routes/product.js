const express = require('express')
const { getProducts } = require('../controllers/product');
const controller = require('../controllers/product');
const router = express.Router();

/* GET products listing. Please establish connection with getProduct function from controllers/product.js  */
router.get('/', function (req, res) {
  res.send(
    'To implement. Please establish connection with getProduct function from controllers/product.js'
  );
});

module.exports = router;
