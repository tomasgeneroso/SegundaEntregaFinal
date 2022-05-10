const mongoose = require("mongoose")
const prodCollection='products'
const prodSchema=new mongoose.Schema({
    id:{type:Number, required:true},
    title:{type:String,required:true},
    description:{type:String},
    code:{type:String},
    thumbnail:{type:String},
    price:{type:Number}
})
const products=new mongoose.model(prodCollection,prodSchema)
module.exports=products