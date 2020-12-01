const express = require('express')
const app = express()

// Login
app.post('/login', (req, res) => {

})

// Get all blog posts
app.get('/posts', (req, res) => {

})

// New post
app.post('/new-post', (req, res) => {

})

// All posts by author
app.get('/posts/:author', (req, res) => {

})

// Update blog post
app.put('posts/:id', (req, res) => {

})

// Get post based on param


// Delete blog post
app.delete('/post/:id', (req, res) => {

})

app.listen(5000, () => {
    console.log('Listening on port', 5000)
})