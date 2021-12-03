const data = require('../assets/data');
const pp = require('../routes/product')

function getProducts(query) {
  return data;
}

module.exports = { getProducts };
