'use strict'

//Instanciar express
//npm i -S express
const express = require('express')
//Instanciar bodyParser
//npm i -S body-parser
const bodyParser = require('body-parser')
const app = express()
const productCtrl = require('./controllers/product')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Product
app.get('/api/product', productCtrl.getProducts)
app.get('/api/product/:productId', productCtrl.getProduct)
app.post('/api/product', productCtrl.saveProduct)
app.put('/api/product/:productId', productCtrl.updateProduct)
app.delete('/api/product/:productId', productCtrl.deleteProduct)
//End Product

module.exports = app