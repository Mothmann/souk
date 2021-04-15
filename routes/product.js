var express = require('express');
const mysql = require("mysql");
const jwt = require('jsonwebtoken');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "database"
})
con.connect();
var router = express.Router();

async function query(req, res){
    await con.query("SELECT * FROM product", (err, rows, fields)=> {
        res.render('read', { title: 'product List', product: rows});
    });

}

function token(req, res) {
    const user = {
        id: 1,
        username: 'othman'
    }
    jwt.sign({user: user}, 'qwerty', (err, token) => {
        res.json({
            token,
        });
    });
}
function verifytoken(req,res,next){
    const bearerHeader = req.headers['authorization']
    if (typeof bearerHeader !== 'undefined')    {
        req.token = bearerHeader.split(' ')[1]
    next()
    } else{
        res.sendStatus(403)
    }
}
/* GET users listing. */
router.post('/read', verifytoken, (req, res) => {
    jwt.verify(req.token, 'qwerty', (err, authData) => {
        if(err){
            res.sendStatus(403)
        } else {con.query("SELECT * FROM product", (err, rows, fields)=> {
            if (err) throw err;
            res.status(200).json({
                products: rows,
            })
        });
        }
    });
});


router.post('/login', token);
//router.get('/read/all', query)
module.exports = router;
