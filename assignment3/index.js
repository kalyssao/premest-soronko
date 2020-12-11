const express = require('express')
const app = express()
const mongoose = require('mongoose')

const postRouter = require('./models/post')
const userRouter = require('./models/user')
require('dotenv').config()

app.use(express.json())
// Post & users endpoints
app.use('/posts', postRouter)
app.use('/users', userRouter)


const config = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(process.env.MONGO_DB_URI, config)
.then(() => {
    console.log('Successful connection!')
})
.catch((err) => {
    console.log(err)
})

// Login endpoint
app.post('/login', (req, res) => {
    const username = req.query.username
    const password = req.query.password

    console.log(req)

    if(username === "lyss" && password === "test"){
        res.send('success')
    } else {
        res.status(400).send('wrong username or password')
    }
})

app.listen(6000, () => {
    console.log('Listening on port', 6000)
})