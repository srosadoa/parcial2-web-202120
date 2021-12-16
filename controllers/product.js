const data = require('../assets/data');

function getProducts(query) {
  let datosRequeridos = data;
  if(query){
    datosRequeridos = datosRequeridos.filter(producto => producto.name.toLowerCase().includes(query.toLowerCase()));
    return datosRequeridos;
  }else{
    return datosRequeridos;
  }
}
module.exports = { getProducts };