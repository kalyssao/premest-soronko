const express = require('express')
const bookRouter = express.Router()
const bookData = require('../books.json')

bookRouter.get('/', (req, res) => {
    
})

bookRouter.post('/', (req, res) => {

})

bookRouter.get('/:bookId', (req, res) => {
    
})

bookRouter.delete('/:bookId', (req, res) => {
    
})

module.exports = bookRouter