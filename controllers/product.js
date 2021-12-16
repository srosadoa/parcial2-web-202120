const data = require('../assets/data');

function getProducts(query) {
  if(query){
    data = data.filter(q => q.name.toLowerCase().includes(query.toLowerCase()));
  }
  return data;
}

module.exports = { getProducts };
