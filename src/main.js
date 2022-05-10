//inicio bbdd y server
const mongoose=require("mongoose")
const config =require("./connections/config.js")
const server=require("./server.js")


const gracefulShutdown= ()=>{mongoose.connection.close()
    .then(()=>{console.log('Mongoose disconnected')})
    .catch(error=>`Error al desconectarse de la bbdd ${error}`)

}

//si terminan los procesos
// process.on('SIGINT',gracefulShutdown)
// process.on('SIGTERM',gracefulShutdown)
// process.on('exit',gracefulShutdown)
// process.on('uncaughtException', gracefulShutdown);