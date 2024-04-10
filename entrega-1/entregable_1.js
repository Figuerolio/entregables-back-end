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
    
    constructor(){
        this.products = [];
    }
    
    
    addProduct(product){
        const existingProduct = this.products.find(products=> products.code === product.code)
        if(existingProduct){
            alert("el producto ya existe")
        }else{
            this.products.push(product);
            return this.products;
        }
    }

    getProducts(){
        return this.products;
    }


    getProductById(code){
        let filteredProduct = this.products.find((product)=> product.code === code)
        if(filteredProduct){
            return filteredProduct
        }else{
            return console.log("Producto no encontrado");
        }
        
        
    }
}


const productManager = new ProductManager();
    productManager.addProduct(product)
    console.log(productManager.getProducts()) 
    console.log(productManager.getProductById())
    