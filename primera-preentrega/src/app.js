import express from "express";
import { data } from "./data.js";
import config from "./config.js"; 
import pRouter from "./routes/product.routes.js";
import cRouter from "./routes/cart.routes.js";



const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/api/cart",cRouter);
app.use("/api/products",pRouter);
app.use("/static",express.static(`${config.DIRNAME}/public`));











