const mongoose=require('mongoose')
const prodSchema=require('./daosSchemaMongodb.js')
const ContainerMongodb=require('../../containers/containerMongodb.js')

class DaosProductos extends ContainerMongodb{
    constructor(){
        super(prodSchema)
    }
}

module.exports=new DaosProductos()