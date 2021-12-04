const data = require('../assets/data');

function getProducts(query) {
  return data.find(query);
}

module.exports = { getProducts };
