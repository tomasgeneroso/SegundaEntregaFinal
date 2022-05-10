class ContainerMemoria{
    constructor(){
        this.array=[]
    }

    getAll(){
        return this.array
    }
    saveData(data){
        this.array.push(data)
        return `Saved!`
    }
}