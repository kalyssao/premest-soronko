const jwt = require('jsonwebtoken')
require('dotenv').config()

function generateAccessToken(username){
    return jwt.sign(username, process.env.ACCESS_TOKEN)
}

function authenticateToken(req, res, next){
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (token == null) return res.sendStatus(401)
    jwt.verify(token, process.env.ACCESS_TOKEN, (err, user) => {
        console.log(err)
        if(err) return res.sendStatus(403)
        req.user = user
        next()
    })
}

module.exports = {authenticateToken, generateAccessToken}