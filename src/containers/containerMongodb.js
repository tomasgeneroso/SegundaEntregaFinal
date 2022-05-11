
const mongoose = require('mongoose')

class ContainerMongodb{
    constructor(collection){
        this.collection=collection
    }
    async getAllProds(){
        try {
            return await this.collection.find()    
        } catch (error) {
            return error
        }   
    }

    async addProd(product){
        try {
            const prod = await this.collection.insertMany(product)
            return prod
        } catch (error) {
            return error
        }
    }
    async updateProd(ids,product){
        try {
            
            const prod= await this.collection.findOneAndUpdate({id:ids},{$set:product})
            return prod
        } catch (error) {
            return `Error to update ${error}`
        }
    }
}

module.exports=ContainerMongodb