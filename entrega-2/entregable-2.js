import { fs } from "fs";

class ProductClass {
    constructor(title,desctiption,price,thumbnail,code,stock){
        this.title = title;
        this.price = price;
        this.desctiption = desctiption;
        this.thumbnail = thumbnail;
        this.code=code;
        this.stock= stock
    }
}

const product = new ProductClass("zapatilla","las mejores","120","img",12,"12") 

class ProductManager{
    
    constructor(path){
        this.products = [];
        this.path = path;
    }
    
    
    addProduct = async (product)=>{
        try {
            const existingProduct = this.products.find(products=> products.code === product.code)
            if(existingProduct){
                alert("el producto ya existe")
            }else{
                this.products.push(product);
                await fs.promises.writeFile(this.path,JSON.stringify(this.products,null,1))
                let productCatalogue = await fs.promises.readFile(this.path,"utf-8")
                console.log(productCatalogue)
        }
        } catch (error) {
            console.log(error)
        }
        
    }

    getProducts = async () => {
        try {
            const data = await fs.promises.readFile(this.path,"utf-8")
            this.product = JSON.parse(data)
            console.log(this.product)
        } catch (error) {
            console.log(error)
        }
    }



    deleteProduct= async (id)=>{
        try {
            const data = JSON.parse(await fs.promises.readFile(this.path,"utf-8"))
            let delProdct = data.find((data)=> data.code === id)
            if(delProdct){
                let newArray = data.filter((elemento)=> elemento.id !== id)
                await fs.promises.writeFile(this.path,JSON.stringify(newArray,null,1))
                console.log("Confirmacion")
            }else{
                console.log("Denegado")
            }
        } catch (error) {
            console.log(error)
        }
    }


    updateProduct= async (id,price)=>{
        try {
            const data = JSON.parse(await fs.promises.readFile(this.path,"utf-8"))
            let prodUpdate = data.find((data)=>data.code === id)
            const index = data.indexOf(prodUpdate)
            if(index> -1){
                data[index].price = price
            }
            if(prodUpdate){
                await fs.promises.writeFile(this.path,JSON.stringify(data,null,1))
                console.log("Updated")
            }else{
                console.log("No Update")
            }
        } catch (error) {
            console.log(error)
        }
    }

    getProductById= async(code)=>{
        try {
            let filteredProduct = this.products.find((product)=> product.code === code)
            if(filteredProduct){
                console.log(filteredProduct)
                return filteredProduct
            }else{
                return console.log("Producto no encontrado");
            }
        } catch (error) {
            console.log(error)
        }
        
        
        
    }
}


const productManager = new ProductManager("productos-entregable.txt");
const testeo = async ()=> {
    await productManager.addProduct(product)
    await productManager.getProducts()
    await productManager.updateProduct(12,300)
    await productManager.getProductById(12)
}    
testeo()
