import mongoose from "mongoose";
const cartCollection='carts'
const cartSchema=new mongoose.Schema({
    id:{type:Number, required:true},
    products:{type:Array}
})

export const carts=new mongoose.model(cartCollection,cartSchema)