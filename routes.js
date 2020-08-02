const express = require('express')
const routes = express.Router()
const Products = require('./products')

routes.get('/', Products.all)
routes.get('/prpducts/:id', Products.product)
routes.post('/products/create', Products.create)
routes.put('/products/:id', Products.edit)
routes.delete('/products/:id', Products.delete)

module.exports = routes