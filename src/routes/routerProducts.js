const express=require('express')
const router=express.Router()
const prod=require('../daos/barrel.js').prodDaos
//get all product
router.get('/',async (req,res)=>{
    const response=await prod.getAllProds()
    res.json(response)
})

//add an product
router.post('/',async(req,res)=>{
    const response=await prod.addProd(req.body)
    res.json(response)
})

//update product
router.put('/:id',async (req,res)=>{
    const prod=req.body
    const id=parseInt(req.params.id)
    //ACA SALTA EL PROBLEMA...
    const response=await prod.updateProd(id,prod)
    res.json(response)
})

module.exports=router