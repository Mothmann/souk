const sequelize = require('sequelize');
const mysql = require("mysql");
const products = require('../models/products');
const user = require('../models/user');
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'qwerty',
    database: 'database'
});

const orders = con.define('orders',{
    ID: {
        type: sequelize.UUID,
        defaultValue: sequelize.UUIDV4
    },
    ProductID: {
        type: sequelize.INTEGER,
        references:{
            model: products,
            key: 'id',
        }
    },
    userID: {
        type: sequelize.INTEGER,
        references:{
            model: user,
            key: 'id',
        }
    },
    Shipping_Address: {
        type: sequelize.STRING,
    },
    Shipping_Date: {
        type: sequelize.DATEONLY
    }
})
module.exports = orders;