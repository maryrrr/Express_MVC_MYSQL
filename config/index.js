const express=require('express')
const db=require('./config/database')

const PORT = 3000;

const app = express()
app.use(express.json())

app.use("/category", require("./routes/categorys"))
app.use("/prod", require("./routes/products"))

app.listen(PORT, () => {console.log(`Server started on port ${PORT}`)});