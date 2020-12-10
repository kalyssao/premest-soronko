const express = require('express')
const authorRouter = express.Router()
const authorData = require('../authors.json')
const authentication = require('../authentication')

authorRouter.get('/', (request, response) => {
    const authors = new Array()
    for(let i = 0; i < authorData.length; i++){
        authors.push(authorData[i].name)
    }
    response.status(200).send(authors)
})

// Protected route - check for token
authorRouter.post('/', authentication.authenticateToken, (request, response) => {
    const newAuthor = request.body.author
    authorData.push(newAuthor)
    response.status(200).send(newAuthor)
})

authorRouter.get('/:authorId', (request, response) => {
    let author = authorData.find(author => author["authorId"] === request.params.authorId)
    if(author){
        response.status(200).send(author)
    } else{
        response.status(400).send('An author with that id was not found')
    }
})

authorRouter.get('/:authorId/books', (request, response) => {
    let books = authorData.find(author => author["authorId"] === request.params.authorId)
    if(books){
        response.status(200).send(books.books)
    } else {
        response.status(200).send('An author with that id was not found')
    }
})

// Protected route - check for token
authorRouter.delete('/:authorId', authentication.authenticateToken, (request, response) => {
    let idToDelete = request.params.authorId

})

module.exports = authorRouter