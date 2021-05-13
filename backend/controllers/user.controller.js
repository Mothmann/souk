const { PrismaClient } = require('@prisma/client');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const prisma = new PrismaClient();

async function signUp(req, res){
    prisma.user.findFirst({where: {username:req.body.username}}).then(result => {
        if (result){
            res.status(409).json({
                message: "username already exists",
            });
        } else {
            bcryptjs.genSalt(10, function(error, salt){
                bcryptjs.hash(req.body.password, salt, async function(error ,hash){
                  const { username } = req.body
                    const createUser = await prisma.user.create({
                       data: {
                           username,
                           password: hash
                       },
                     })
                    res.json(createUser)
                });
            })
        }
    }).catch(error => {
        res.status(500).json({
            message: 'something went wrong'
        });
    });
   
};

function login(req, res){
    prisma.user.findFirst({where: {username:req.body.username}}).then(user => {
        if(user === null){
            res.status(401).json({
                message: 'wrong username or password',
            });
        } else {
            bcryptjs.compare(req.body.password, user.password, function(err, result){
                if (result){
                    const token = jwt.sign({
                        ID: user.ID,
                        username: user.username,

                    }, 'secret' ,function(err , token){
                        res.status(200).json({
                            message: 'Authentication successful',
                            token: token
                        });
                    });
                }else {
                    res.status(401).json({
                        message: 'wrong username or password',
                    });
                }
            });
        }
    }).catch(error => {
        res.status(500).json({
            message: 'something went wrong'
        });
    });
}
module.exports = {
    signUp: signUp,
    login: login,
};