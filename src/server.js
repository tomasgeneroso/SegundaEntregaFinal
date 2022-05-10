//INICIALIZO SERVER Y HAGO USO DEL ROUTER
const express=require("express")
const port=require("../config.json")
const routerCart=require('./routes/routerCart.js')
const routerProducts=require('./routes/routerProducts.js')

const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const server=app.listen(()=>{console.log(`Listen port ${port.port}`)})

//si error...
app.use((error,req,res,next)=>{
    if(error){console.log(error.message);return res.status(500).send(`There was an error ${error}`)}
})

//rutas
app.use('/api',routerProducts)
app.use('/api',routerCart)

//si error...
server.on('error',error=>{
    console.error(`Error in server port ${port}`)
})

module.exports=server
