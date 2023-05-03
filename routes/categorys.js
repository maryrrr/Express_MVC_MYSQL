const express = require("express")

const routerCat = express.Router()
const CategoryControll = require("../controller/CategoryControll")

routerCat.post("/", CategoryControll.create)
routerCat.put("/", CategoryControll.putCat)
routerCat.get("/", CategoryControll.getCategoryALL)
routerCat.get("/",CategoryControll.getDESC)

module.exports = routerCat