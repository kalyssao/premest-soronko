const express = require('express')
const adminRouter = express.Router()
const authentication = require('../middleware/auth')

// On login, use the generateAccessToken method 
// to return a token that will be used later (if this were a fullstack app it would be sent to the browser and saved in cookies/localStorage)
adminRouter.post('/login', (req, res) => {
    const { username, password } = req.body
    const token = authentication.generateAccessToken(username)
    res.status(200).send({ "message": "successful login!", "token": token })
})


adminRouter.post('/logout', (req, res) => {
    // Remove said token
})

module.exports = adminRouter