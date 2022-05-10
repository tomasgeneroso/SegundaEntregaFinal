const express = require('express');
const cartDaos=require('../daos/indexDaos.js')
const router=express.Router()

//Me permite listar todos los cartDaosos disponibles 
router.get('/',(req,res)=>{ 
    let prod=cartDaos.getAllcartDaoss()
    let cartDaos=JSON.stringify(prod,null,"\t")
    res.send({status:"success",message:"cartDaos: "+cartDaos})
})
//Me permite listar un cartDaoso por su id (disponible para usuarios y administradores)
router.get('/:pid',(req,res)=>{ 
    let id=parseInt(req.params.pid)
    let prod=cartDaos.getcartDaos(id)
    prod=JSON.stringify(prod,null,"\t")
    res.send({status:'succes',cartDaoss:prod})
})
//Para incorporar cartDaosos al listado (disponible para administradores)
router.post('/',(req,res)=>{
    let prod=req.body
    cartDaos.addcartDaos(prod)
    res.send({status:'success',message:'connected'})
})
//Actualiza un cartDaoso por su id (disponible para administradores)
router.put('/:pid',(req,res)=>{
    let id=req.params.pid
    let prod=req.body
    cartDaos.updatecartDaos(id,prod)
    res.send({status:'success',message:'connected'})
})
//Borra un cartDaoso por su id (disponible para administradores)
router.delete('/:pid',(req,res)=>{
    let id=parseInt(req.params.pid)
    cartDaos.deletecartDaos(id)
    res.send({status:'success',message:'connected'})
})
module.exports=router
