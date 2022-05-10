const mongoose=require("mongoose")
const config =require("../../config.json")

const model=require("../daos/products/daoProdMongodb/prodModel.js")

class ContainerMongodb{
    constructor(collection){
        this.collection =collection
    }

    async getAllProducts(){
        try {
            const response= this.collection.find({})
            return await response;
        } catch (error) {
            console.log(`Error al tratar de obetener todos los productos: ${error}`)
            return []
        }
    }

    addProduct(prod){
        try {
            if(this.collection.find({id:prod.id})){
                this.collection.updateOne({id:prod.id},{stock:stock+1})
                return `Stock added!`
            }else{
                this.collection.insertOne(prod)
                return `Product added!`
            }
        } catch (error) {
            console.log(`ERROR--> ${error} NO SE PUDO AGREGAR EL PRODUCTO`)
        }
       
    }

}
module.exports=ContainerMongodb
