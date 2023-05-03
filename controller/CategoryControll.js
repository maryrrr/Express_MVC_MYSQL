const db = require("../config/database.js")


const CategoryControll = {
    create(req, res) {
        let sql = `INSERT INTO Category (name_category, total_quantity) values
        ('${req.body.name_category}','${req.body.total_quantity}')`
        db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send("Post added...")
        })
        },
    putCat(req, res) {
        let newTitle = 'Camiseta';
        let sql = `UPDATE Products SET name_prod = '${newTitle}' WHERE idProducts = ${req.params.id}`;
        db.query(sql, (err,result)=> {
        if(err) throw err;
        res.send('Products updated...')
        })
        },
    getCategoryALL(req, res) {
        let sql = 'SELECT * FROM Category';
        db.query(sql,(err,result)=> {
        if(err) throw err;
        res.send({ message: 'Get posts', result })
        })
        },
    getDESC(req,res) {
        let sql = `SELECT * FROM Category ORDER BY total_quantity DESC`;
        db.query(sql,(err,result)=> {
        if(err) throw err;
        res.send(result)
    })
    },
}
module.exports=CategoryControll