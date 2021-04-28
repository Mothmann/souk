const sequelize = require('sequelize');
const mysql = require("mysql");
const category = require("../models/category")
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'qwerty',
    database: 'database'
});

const products = con.define('product',{
    ID: {
        type: sequelize.UUID,
        defaultValue: sequelize.UUIDV4
    },
    name: {
        type: sequelize.STRING,
    },

    description: {
        type: sequelize.STRING,
    },
    price: {
        type: sequelize.INTEGER,
    },

    categoryID: {
        type: sequelize.INTEGER,
        references: {
            model: category,
            key: 'id',
        }
    },
    UnitsinStock: {
        type: sequelize.INTEGER,
    },
    PicturePath: {
        type: sequelize.STRING,
        allowNull: true
    }

})
module.exports = products;