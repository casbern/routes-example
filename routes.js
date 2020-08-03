const express = require('express')
const routes = express.Router()
const Products = require('./products')

routes.get('/products', Products.all)
routes.get('/products/1', Products.product)
routes.post('/products/create', Products.create)
routes.put('/products/1', Products.edit)
routes.delete('/products/1', Products.delete)

module.exports = routes