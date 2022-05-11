const mongoose=require('mongoose')
const prodSchema= new mongoose.Schema({
    id:{type:Number, required:true},
    title:{type:String,required:true},
    description:{type:String},
    code:{type:String},
    thumbnail:{type:String},
    price:{type:Number}  
})

const prodModel=   mongoose.model('products',prodSchema)
module.exports=prodModel