require('dotenv').config()
let prodDaos;
//let cartDaos;

switch(process.env.databasechoosen){
    case "mongodb":
        prodDaos=require('./products/daosProdMongodb.js')
        //cartDaos=import('./cart/daoCartMongodb/daoCartMongodb.js')
        const mongoose=require('mongoose')
        mongoose.connect(process.env.DB).then(()=>{console.log(`Connected to MONGODB ATLAS`)}).catch(e=>`error: ${e}`)
        console.log('Using MONGODB')
    break;
    case "firebase":
        prodDaos=import('./products/daoProdFirebase.js')
        //cartDaos=import('./cart/daoCartFirebase.js')
        console.log('Using FIREBASE')
    break;
    case "archivos":
        prodDaos=import('./products/daoProdArchivos.js')
        //cartDaos=import('./cart/daoCartArchivos.js')
        console.log('Using FILES')
    break;
    case "Memoria":
        prodDaos=import('./products/daoProdMemoria.js')
        //cartDaos=import('./cart/daoCartMemoria.js')
        console.log('Using MEMORY')
    break;
}
//exportar cartDaos despues
module.exports={prodDaos}