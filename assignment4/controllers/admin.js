const express = require('express')
const adminRouter = express.Router()
const authentication = require('../authentication')

adminRouter.post('/login', (req, res) => {
    // Return a token that will be used later
    const { username, password } = req.body
    const token = authentication.generateAccessToken(username)
    res.status(200).send({ "message": "successful login!", "token": token })
})


adminRouter.post('/logout', (req, res) => {
    // Remove said token
})

module.exports = adminRouter