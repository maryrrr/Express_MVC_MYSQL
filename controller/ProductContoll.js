const db = require("../config/database.js")

const ProductControll = {
  create(req, res) {
    let sql = `INSERT INTO Products (id_category,name_prod) values
        ('${req.body.id_category}','${req.body.name_prod}')`
        db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send("Post added...")
        })
        },
    putProduc(req,res) {
        let newTitle = 'Camiseta';
        let sql = `UPDATE Products SET name_prod = '${newTitle}' WHERE idProducts = ${req.params.id}`;
        db.query(sql, (err,result)=> {
        if(err) throw err;
        res.send('Products updated...')
        })
        },
    deleteProd(req,res) {
        app.delete('/del_prod/id/:id',(req,res)=>{
        let sql = `DELETE FROM Products WHERE idProducts = ${req.params.id}`;
        db.query(sql, (err,result)=> {
        if(err) throw err;
        res.send('Product deleted')
        })
        })
    getProdName('/name/:name',(req,res)=>{
        let sql = `SELECT * FROM Products WHERE name_prod = ${req.params.name}`;
        db.query(sql,(err,result)=> {
        if(err) throw err;
        res.send(result)
        })
        })

    getDesc('/Desc',(req,res)=>{
        let sql = `SELECT * FROM Category ORDER BY total_quantity DESC`;
        db.query(sql,(err,result)=> {
        if(err) throw err;
        res.send(result)
        })
        })
    },
}

module.exports=ProductControll
