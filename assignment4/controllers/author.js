const express = require('express')
const authorRouter = express.Router()
const authorData = require('../authors.json')

authorRouter.get('/', (req, res) => {
    
})

authorRouter.post('/', (req, res) => {

})

authorRouter.get('/:authorId', (req, res) => {
    
})

authorRouter.get('/:authorId/books', (req, res) => {

})

authorRouter.delete('/:authorId', (req, res) => {

})

module.exports = authorRouter