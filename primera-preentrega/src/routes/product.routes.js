import {Router} from "express";
import {data} from "../data.js"
import {fs} from 'fs'
import ProductManager from "../ProducManager.js";
import { uploader } from "../uploader.js";

const pRouter = Router();
const productManager = new ProductManager("../data.js")


pRouter.get("/", (req,res)=>{
    const limit = parseInt(req.query.limit);
    const products = productManager.getProducts(limit)
    res.json(products)
})

pRouter.get("/:pid",(req,res)=>{
    const productId = parseInt(req.params.pid);
    const product = productManager.getProductById(productId)
    if(!product){
        res.status(404).json({message:"product not found"})

    }else{
        res.json(product);
    }
})

pRouter.post("/",(req,res)=>{
    const product = new ProductClass("zapatilla","las mejores","120","img",12,"12") 
    const {title,description,price,thumbnail,code,stock}= req.body;
    const newProduct = productManager.addProduct(product)

    res.json(newProduct)
})

pRouter.put("/:id",(req,res)=>{

})


pRouter.delete("/:id",(req,res)=>{
})









export default pRouter;

