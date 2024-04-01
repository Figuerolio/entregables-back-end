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

const product = new ProductClass("zapatilla","las mejores","120","img","12","12") 

class ProductManager{
    
    constructor(){
        this.products = [];
    }
    
    
    addProduct(product){
        if(product.code !== this.products.code){
            this.products.push(product)
        }else{
            alert("Ya existe este producto")
            return this.products
        }
    }

    getProducts(){
        return this.products;
    }


    getProductById(){
        let filteredProduct = this.products.find((code)=> product.code === code)
        return filteredProduct
    }
}


const productManager = new ProductManager();
    productManager.getProducts()
    productManager.addProduct()