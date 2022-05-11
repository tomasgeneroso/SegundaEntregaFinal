const express=require('express')
const mongoose = require('mongoose')
require("dotenv").config()
//iniciamos engine a utilizar
const barrel=require('./daos/barrel.js')
const routerProduct=require('./routes/routerProducts.js')
const app=express()
app.use(express.json())
app.use(express({urlencoded:true}))
const port=process.env.PORT||8080

app.use((error,req,res,next)=>{console.log(`error: ${error}`)})
app.use('/api/products',routerProduct)

app.listen(port,()=>{console.log(`Listen port ${port}`)})

//desconectar mongoose
process.on('SIGINT', () => {
    console.log('Mongoose disconnected')
    mongoose.connection.close()
  });