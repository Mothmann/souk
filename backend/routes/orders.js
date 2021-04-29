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
    jwt.sign({user: user}, 'qwerty2', (err, token) => {
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
    jwt.verify(req.token, 'qwerty2', (err, authData) => {
        if(err){
            res.sendStatus(403)
        } else {con.query("SELECT * FROM orders", (err, rows, fields)=> {
            if (err) throw err;
            res.status(200).json({
                order: rows,
            })
        });
        }
    });
});


router.post('/login', token); */
router.get('/read', async (req, res) => {
    const orders = await prisma.orders.findMany()
    res.json(orders)
  })
router.post(`/create`, async (req, res) => {
    const { ID, Shipping_Address, Shipping_date,ProductID,userID } = req.body
    const result = await prisma.orders.create({
      data: {
        ID: 3,
        Shipping_Address: 'eefedefef',
        Shipping_Date:'2021-04-28T00:00:00.000Z',
        ProductID: 1,
        userID: 1,
      },
    })
    res.json(result)
  })  
  router.put('/update/:id', async (req, res) => {
    const { id } = req.params
    const orders = await prisma.orders.update({
      where: { ID: Number(id) },
      data: {Shipping_Address: 'idk'},
    })
    res.json(orders)
  })
  router.delete(`/delete/:id`, async (req, res) => {
    const { id } = req.params
    const orders = await prisma.orders.delete({
      where: {
        ID: Number(id),
      },
    })
    res.json(orders)
  })

module.exports = router;
