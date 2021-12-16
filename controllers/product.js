const data = require('../assets/data');

function getProducts(query) {
  if(query){
    data = data.filter(producto => producto.name.toLowerCase().includes(query.toLowerCase()));
    return data;
  }else{
    return data;
  }
}

module.exports = { getProducts };
