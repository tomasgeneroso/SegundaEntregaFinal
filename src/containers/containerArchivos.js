const fs=require('fs')
class ProductArch{
    constructor(filename){
        this.filename=filename
    }
    getAllProducts(){
        try {
            if (fs.existsSync(`./src/files/${this.filename}`)) {
                let prod = fs.readFileSync(this.filename,'utf-8')
                let lec=JSON.stringify(prod)
                return lec
            }
        } catch (error) {
            console.log(`ERROR--> ${error} NO SE PUDIERON OBTENER LOS PRODUCTOS`)
        }
        
    }
    addProduct(prod){
        try {
            if (fs.existsSync(`./src/files/${this.filename}`)) {
               let arch=fs.readFileSync(`./src/files/${this.filename}`,'utf-8')
               let prods= JSON.parse(arch)
               let flag=true
               
               prods.map(el=>{
                   if(el.id==prod.id){
                       console.log('STOCK EXISTENTE:'+el.stock)
                       el.stock=el.stock+1
                       console.log('RENOVADO:'+el.stock)
                       flag=false
                   }
               })
               if(flag){
                prods.push(prod)
               }
               //guardo
               fs.writeFileSync(`./src/files/${this.filename}`,JSON.stringify(prods))
            }else{
                //creo archivo si no existe
                let arr=[]
                arr.push(prod)
                fs.writeFileSync(`./src/files/${this.filename}`,JSON.stringify(arr))
            }
        } catch (error) {
            console.log(`ERROR--> ${error} NO SE PUDO AGREGAR EL PRODUCTO`)
        }
       
    }
    updateProduct(id,product){
        try {
            if (fs.existsSync(`./src/files/${this.filename}`)) {
                //leo el arch 
                let prod = fs.readFileSync(`./src/files/${this.filename}`,'utf-8')
                let lec = JSON.parse(prod)
                let flag=false
                lec.find(el=>{
                    el.id==id
                    flag=true
                })
                //si existe
                if(flag==true){
                    lec[id]=product
                    //añado producto
                    fs.writeFileSync(`./src/files/${this.filename}`,JSON.stringify(lec))
                    console.log('PRODUCT ADDED')
                }else{
                    console.log(`PRODUCT DON'T FOUND`)
                    throw error
                }
            }
        } catch (error) {
            console.log(`ERROR--> ${error} TO ADD THE PRODUCT: ${id}, FILE DOESN'T EXIST`)
        }
    }
    deleteProduct(id){
        try {
            if (fs.existsSync(`./src/files/${this.filename}`)) {
                //leo el arch 
                let prod = fs.readFileSync(`./src/files/${this.filename}`,'utf-8')
                let lec = JSON.parse(prod)
                let flag=false
                let show
                lec.map(el=>{
                    if(el.id==id){
                        flag=true
                    }
                })
                //si existe el producto
                if(flag===true){
                    show=lec.filter(el=>el.id!==id)
                    //añado producto
                    fs.writeFileSync(`./src/files/${this.filename}`,JSON.stringify(show))
                    console.log('PRODUCT DELETED')
                }else{
                    console.log(`PRODUCT DON'T FOUND`)
                    throw error
                }
            }
        } catch (error) {
            
            console.log(`ERROR--> ${error} TO DELETE THE PRODUCT: ${id}, FILE DOESN'T EXIST`)
        }
    }
}
module.exports=new ProductArch
