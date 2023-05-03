const express=require('express')
const routerProducts=express.Router()
const db=require('../config/database')


routerProducts.post("/", ProductContoll.create)
routerProducts.put("/", ProductContoll.putProduc)
routerProducts.delete("/del_prod/id/:id", ProductContoll.deleteProd)
routerProducts.get("/name/:name", ProductContoll.getProdName)
routerProducts.get("/Desc", ProductContoll.getDesc)

module.exports=routerProducts