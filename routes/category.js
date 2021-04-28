var express = require('express');
const mysql = require("mysql");
const jwt = require('jsonwebtoken');
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'qwerty',
    database: 'database'
});
con.connect();
var router = express.Router();


function token(req, res) {
    const user = {
        id: 1,
        username: 'othman'
    }
    jwt.sign({user: user}, 'qwerty1', (err, token) => {
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
    jwt.verify(req.token, 'qwerty1', (err, authData) => {
        if(err){
            res.sendStatus(403)
        } else {con.query("SELECT * FROM category", (err, rows, fields)=> {
            if (err) throw err;
            res.status(200).json({
                categories: rows,
            })
        });
        }
    });
});


router.post('/login', token);
module.exports = router;
