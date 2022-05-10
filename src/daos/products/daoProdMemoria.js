const containerArchivos=require('../../containers/containerMemoria.js')

class DaoProdMem extends ContainerMemoria{
    constructor(){
        super()
    }
}

module.exports= new DaoProdMem