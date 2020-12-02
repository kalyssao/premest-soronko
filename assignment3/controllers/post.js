const postRouter = require('express').Router()
const { response } = require('express')
const Post = require('../models/post')

// Get all posts
postRouter.get('/', (request, response, next) => {
    Post.find({}).then((res) => {
        response.status(200).send(res)
        next()
    })
})

// Get posts by author
postRouter.get('/:author', (request, response, next) => {
    const author = request.params.author
    Post.find({author: author}).then((res) => {
        response.status(200).send(res)
        next()
    })
})

// Get post based on parameter

// Add new post
postRouter.post('/', async (request, response, next) => {
    const { title, content, author, date } = request.body

    if (title && content && author && date) {
        const postCount = await Post.countDocuments()
        const newPost = new Post({
            id: postCount + 1,
            title: title,
            content: content,
            author: author,
            date: date
        })
        newPost.save()
        .then( res => {
            response.status(201).send({message: 'successfully added!'})
        })
        .catch( err => {
            console.log(err)
        })
    } else {
        response.status(400).send({message: 'Missing some fields'})
    }
})

// Update a post (content & number of votes)

// Delete a post
postRouter.delete('/:id', (request, response, next) => {
    deleteID = req.params.id
    Post.findOneAndDelete({id: deleteID}).then((res) => {
        response.status(200)
        next()
    }).catch((err) => console.log(err))
})

postRouter.patch('/:id', (request, response, next) => {

})

module.exports = postRouter