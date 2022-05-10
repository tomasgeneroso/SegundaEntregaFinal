//ACTUA DE BARREL --> de acuerdo al motor que se elija en config se ocupa bbdd/arch/memoria
//en el switch selecciona cada uno de acuerdo a cada case
const config = require("../../config.json")

let prodDaos;
let cartDaos;

switch(config.database.engine){
    case "mongodb":
        prodDaos=import('./products/daoProdMongodb/daoProdMongodb.js')
        cartDaos=import('./cart/daoCartMongodb/daoCartMongodb.js')
        console.log('Using MONGODB')
    break;
    case "firebase":
        prodDaos=import('./products/daoProdFirebase.js')
        cartDaos=import('./cart/daoCartFirebase.js')
        console.log('Using FIREBASE')
    break;
    case "archivos":
        prodDaos=import('./products/daoProdArchivos.js')
        cartDaos=import('./cart/daoCartArchivos.js')
        console.log('Using FILES')
    break;
    case "Memoria":
        prodDaos=import('./products/daoProdMemoria.js')
        cartDaos=import('./cart/daoCartMemoria.js')
        console.log('Using MEMORY')
    break;
}
module.exports={prodDaos,cartDaos}