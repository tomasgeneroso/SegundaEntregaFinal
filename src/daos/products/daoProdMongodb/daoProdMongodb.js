const containerMongo=require('../../../containers/containerMongodb.js')
const model =require("./prodModel.js")
class DaoProdMongo extends containerMongo{
    constructor(){
        super('model.products')
    }
}

module.exports= new DaoProdMongo