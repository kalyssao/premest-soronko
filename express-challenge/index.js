const express = require('express')
const app = express()
app.use(express.json())

const userData = require('./users.json')

app.get('/users', (req, res) => {
    res.send(userData)
})

app.get('/users/:userId', (req, res) => {
    res.send(userData[req.params.userId])
})

app.post('/users/add', (req, res) => {
    let name = req.body.name
    let age = req.body.age

    userData.push({"name": name, "age": age})
    res.status(200).send(userData)
})

app.delete('/users', (req, res) => {
    userData.pop()
    res.status(200).send(userData)
})

app.listen(4500, () => {
    console.log('Listening on port', 4500)
})