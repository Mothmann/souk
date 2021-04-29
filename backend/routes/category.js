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
router.post('/read1', verifytoken, (req, res) => {
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
}); */
router.get('/read', async (req, res) => {
    const category = await prisma.category.findMany()
    res.json(category)
  })
router.post(`/create`, async (req, res) => {
    const { ID, name, description } = req.body
    const result = await prisma.category.create({
      data: {
        ID,
        name,
        description,
      },
    })
    res.json(result)
  })  
  router.put('/update/:id', async (req, res) => {
    const { id } = req.params
    const category = await prisma.category.update({
      where: { ID: Number(id) },
      data: {name: 'idk'},
    })
    res.json(category)
  })
  router.delete(`/delete/:id`, async (req, res) => {
    const { id } = req.params
    const category = await prisma.category.delete({
      where: {
        ID: Number(id),
      },
    })
    res.json(category)
  })

//router.post('/login', token);
module.exports = router;
  