var express = require('express');
const mysql = require("mysql");
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()
var router = express.Router();


/* function token(req, res) {
    const user = {
        id: 1,
        username: 'othman'
    }
    jwt.sign({user: user}, 'qwerty3', (err, token) => {
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
/* GET users listing. 
router.post('/read', verifytoken, (req, res) => {
    jwt.verify(req.token, 'qwerty3', (err, authData) => {
        if(err){
            res.sendStatus(403)
        } else {con.query("SELECT * FROM user", (err, rows, fields)=> {
            if (err) throw err;
            res.status(200).json({
                user: rows,
            })
        });
        }
    });
});


router.post('/login', token); */
router.get('/read', async (req, res) => {
    const user = await prisma.user.findMany()
    res.json(user)
  })
router.post(`/create`, async (req, res) => {
    const { ID, username, password, role } = req.body
    const result = await prisma.user.create({
      data: {
        ID,
        username,
        password,
        role,
      },
    })
    res.json(result)
  })  
  router.put('/update/:id', async (req, res) => {
    const { id } = req.params
    const user = await prisma.user.update({
      where: { ID: Number(id) },
      data: {username: 'idk'},
    })
    res.json(user)
  })
  router.delete(`/delete/:id`, async (req, res) => {
    const { id } = req.params
    const user = await prisma.user.delete({
      where: {
        ID: Number(id),
      },
    })
    res.json(user)
  })
module.exports = router;
