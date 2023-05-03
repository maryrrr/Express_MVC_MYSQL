const express=require('express')
const mysql=require('mysql2')
const PORT='3000'
const app=express()


app.use(express.json())
const db = mysql.createConnection({
host : 'localhost',
user : 'root',
password : 'damian2007',
database:'Ecommercesql'
})

app.get('/createdb',(req,res)=>{
    let sql ='CREATE DATABASE Ecommercesql'
    db.query(sql,(err,result)=>{
    if(err)throw err;
    console.log(result);
    res.send('Database created...')
    })
    })

///Ejercicio 1
    app.get('/createTable',(req,res)=>{
        let sql = 'CREATE TABLE Category(id int AUTO_INCREMENT,name_category VARCHAR(255),total_quantity INT(10), PRIMARY KEY(id))'
        db.query(sql,(err,result)=> {
        if(err) throw err;
        console.log(result);
        res.send('Category table created...')
        })
        })

    app.post("/", (req, res) => {
        let sql = `INSERT INTO Category (name_category, total_quantity) values
        ('Vaqueros', '3500');`;
        db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send("Post added...")

        })
        })

    
    app.post("/", (req, res) => {
        let sql = `INSERT INTO Category (name_category, total_quantity) values
        ('${req.body.name_category}','${req.body.total_quantity}')`
        db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send("Post added...")
        })
        })


    app.get('/createTableProducts',(req,res)=>{
        let sql = 'CREATE TABLE Products(idProducts int AUTO_INCREMENT,id_category INT(10),name_prod VARCHAR(150), PRIMARY KEY(idProducts),FOREIGN KEY (id_category)REFERENCES  Category(id))'
        db.query(sql,(err,result)=> {
        if(err) throw err;
        console.log(result);
        res.send('Products table created...')
        })
        })



    app.post("/insertProdPost", (req, res) => {
        let sql = `INSERT INTO Products (id_category,name_prod) values
        ('${req.body.id_category}','${req.body.name_prod}')`
        db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send("Post added...")
        })
        })


    app.post("/insertProd", (req, res) => {
        let sql = `INSERT INTO Products (id_category, name_prod) values
        (1, 'Camisas');`;
        db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send("Post added...")
    
        })
        })
///Ejercicio3 

app.put('/Category/id/:id',(req,res)=>{
    let newTitle = 'Short';
    let sql = `UPDATE Category SET name_category = '${newTitle}' WHERE id = ${req.params.id}`;
    db.query(sql, (err,result)=> {
    if(err) throw err;
    res.send('Category updated...')
    })
    })
    app.put('/Product/id/:id',(req,res)=>{
        let newTitle = 'Camiseta';
        let sql = `UPDATE Products SET name_prod = '${newTitle}' WHERE idProducts = ${req.params.id}`;
        db.query(sql, (err,result)=> {
        if(err) throw err;
        res.send('Products updated...')
        })
        })
//Ejercicio4
app.get('/product',(req,res)=> {
    let sql = 'SELECT * FROM Products';
    db.query(sql,(err,result)=> {
    if(err) throw err;
    res.send({ message: 'Get posts', result })
    })
    })



app.get('/category',(req,res)=> {
    let sql = 'SELECT * FROM Category';
    db.query(sql,(err,result)=> {
    if(err) throw err;
    res.send({ message: 'Get posts', result })
    })
    })

app.get('/inner',(req,res)=> {
    let sql = 'SELECT p.name_prod,c.name_category FROM Products p INNER JOIN Category c ON p.id_category=c.id'
    db.query(sql,(err,result)=> {
    if(err) throw err;
    res.send({ message: 'Get posts', result })
    })
    })

app.get('/Prod/id/:id',(req,res)=>{
    let sql = `SELECT * FROM Products WHERE idProducts = ${req.params.id}`;
    db.query(sql,(err,result)=> {
    if(err) throw err;
    res.send(result)
    })
    })


app.get('/Desc',(req,res)=>{
    let sql = `SELECT * FROM Category ORDER BY total_quantity DESC`;
    db.query(sql,(err,result)=> {
    if(err) throw err;
    res.send(result)
    })
    })

app.get('/Categ/id/:id',(req,res)=>{
    let sql = `SELECT * FROM Category WHERE id = ${req.params.id}`;
    db.query(sql,(err,result)=> {
    if(err) throw err;
    res.send(result)
    })
    })
    
app.post('/name',(req,res)=>{
    let sql = `SELECT * FROM Products WHERE name_prod = ${req.params.name}`;
    db.query(sql,(err,result)=> {
    if(err) throw err;
    res.send(result)
    })
    })

    app.delete('/del_prod/id/:id',(req,res)=>{
        let sql = `DELETE FROM Products WHERE idProducts = ${req.params.id}`;
        db.query(sql, (err,result)=> {
        if(err) throw err;
        res.send('Product deleted')    
    })
    })


db.connect()



app.listen(PORT,()=> console.log(`Server start ${PORT}`))