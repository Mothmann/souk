const express = require('express');
const mysql = require("mysql");
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient();

const router = express.Router();

/* async function query(req, res){
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
/* GET users listing. 
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
router.get('/read/all', query) */
router.get('/read', async (req, res) => {
    const product = await prisma.product.findMany()
    res.json(product)
  })
router.post(`/create`, async (req, res) => {
    const { ID, name, description, UnitsinStock,PicturePath, price } = req.body
    const result = await prisma.product.create({
      data: {
        ID,
        name,
        description,
        PicturePath,
        UnitsinStock,
        price
      },
    })
    res.json(result)
  })  
  router.put('/update/:id', async (req, res) => {
    const { id } = req.params
    const product = await prisma.product.update({
      where: { ID: Number(id) },
      data: {name: 'idk'},
    })
    res.json(product)
  })
  router.delete(`/delete/:id`, async (req, res) => {
    const { id } = req.params
    const product = await prisma.product.delete({
      where: {
        ID: Number(id),
      },
    })
    res.json(product)
  })
module.exports = router;
