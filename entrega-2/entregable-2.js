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
                await fs.promises.appendFile(this.path,product)
                productCatalogue = await fs.promises.readFile(path,"utf-8")
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
        } catch (error) {
            console.log(error)
        }
    }



    deleteProduct= async (id)=>{
        try {
            const data = fs.promises.readFile(this.path,"utf-8")
            let delProdct = data.find((data)=> data.id === id)
            if(delProdct){
                let newArray = data.filter((elemento)=> elemento.id !== id)
                await fs.promises.writeFile(this.path,JSON.stringify(newArray,null,1))
            }else{

            }
        } catch (error) {
            console.log(error)
        }
    }


    updateProduct= async (id,price)=>{
        try {
            const data = fs.promises.readFile(this.path,"utf-8")
            let prodUpdate = data.find((data)=>data.id === id)
            if(prodUpdate){
                let updated = fs.promises.appendFile(this.path,price)
                console.log(updated)
            }
        } catch (error) {
            console.log(error)
        }
    }

    getProductById= async(code)=>{
        try {
            let filteredProduct = this.products.find((product)=> product.code === code)
            if(filteredProduct){
                return filteredProduct
            }else{
                return console.log("Producto no encontrado");
            }
        } catch (error) {
            console.log(error)
        }
        
        
        
    }
}


const productManager = new ProductManager();
    productManager.addProduct(product)
    console.log(productManager.getProducts()) 
    console.log(productManager.getProductById())