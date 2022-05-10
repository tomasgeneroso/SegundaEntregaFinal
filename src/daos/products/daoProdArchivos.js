const containerArchivos=require('../../containers/containerArchivos.js')

class DaoProdArchivos extends containerArchivos{
    constructor(){
        super('productos.txt')
    }
}

module.exports= new DaoProdArchivos