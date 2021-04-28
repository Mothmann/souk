const sequelize = require('sequelize');
const mysql = require("mysql");
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'qwerty',
    database: 'database'
});

const category = con.define('category',{
    ID: {
        type: sequelize.UUID,
        defaultValue: sequelize.UUIDV4
    },
    name: {
        type: sequelize.STRING,
    }
    ,
    description: {
        type: sequelize.STRING,
    }
})
module.exports = category;