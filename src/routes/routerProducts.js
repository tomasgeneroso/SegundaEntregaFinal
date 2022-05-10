const express = require('express');
//containerarchivos
const prodDaos=require('../daos/indexDaos.js')
const router=express.Router()

//Me permite listar todos los productos disponibles 
router.get('/prods',(req,res)=>{ 
    let prod=prodDaos.getAllProducts()
    let product=JSON.stringify(prod,null,"\t")
    res.send({status:"success",message:"PRODUCT: "+product})
})

//Para incorporar productos al listado (disponible para administradores)
router.post('/',(req,res)=>{
    let prod=req.body
    prodDaos.addProduct(prod)
    res.send({status:'success',message:'connected'})
})
//Actualiza un producto por su id (disponible para administradores)
router.put('/:pid',(req,res)=>{
    let id=req.params.pid
    let prod=req.body
    prodDaos.updateProduct(id,prod)
    res.send({status:'success',message:'connected'})
})
//Borra un producto por su id (disponible para administradores)
router.delete('/:pid',(req,res)=>{
    let id=parseInt(req.params.pid)
    prodDaos.deleteProduct(id)
    res.send({status:'success',message:'connected'})
})

module.exports=router