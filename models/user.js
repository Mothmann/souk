const sequelize = require('sequelize');
const mysql = require("mysql");
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'qwerty',
    database: 'database'
});

const user = con.define('category',{
    ID: {
        type: sequelize.UUID,
        defaultValue: sequelize.UUIDV4
    },
    username: {
        type: sequelize.STRING,
    }
    ,
    password: {
        type: sequelize.STRING,
    },
    role: {
        type: sequelize.STRING,
    }
})
module.exports = user;