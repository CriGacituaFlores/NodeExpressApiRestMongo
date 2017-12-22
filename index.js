'use strict'

//Instanciar express
//npm i -S express
const express = require('express')
//Instanciar bodyParser
//npm i -S body-parser
const bodyParser = require('body-parser')

//sudo npm i -S mongoose
const mongoose = require('mongoose')

//sudo npm i -D nodemon

const Product = require('./models/product')


const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())

app.get('/api/product', (req,res) => {
    //OBJETO VACIO BUSCA TODO
    Product.find({}, (err, products) => {
        if (err) {
            return res.status(500).send({message: `Error al realizar peticion: ${err}`})            
        }
        if (!products) {
            return res.status(404).send({message: `No existen productos`})
        }

        res.send(200, { products })
    })

})

app.get('/api/product/:productId', (req,res) => {
    let productId = req.params.productId

    Product.findById(productId, (err, product) => {
        if (err) {
            return res.status(500).send({message: `Error al realizar peticion: ${err}`})
        }
        if (!product) {
            return res.status(404).send({message: `El producto no existe`})
        }

        res.status(200).send({ product })
    })
})

app.post('/api/product', (req,res) => {
    console.log('POST /api/product')
    console.log(req.body)

    let product = new Product()
    product.name = req.body.name
    product.picture = req.body.picture
    product.price = req.body.price
    product.category = req.body.category
    product.description = req.body.description

    product.save((err, productStored) => {
        if (err) {
            res.status(500).send({message: `Error al salvar en la BD: ${err}`})
        }
        
        res.status(200).send({product: productStored})
    })
})

app.put('/api/product/:productId', (req,res) => {
    let productId = req.param.productId
    let update = req.body

    Product.findByIdAndUpdate(productId, {price: update.price}, {upsert: true}, (err, updated) => {
        if (err) {
            res.status(500).send({message: `Error al actualizar producto: ${err}`})
        }
        
        console.log('ACTUALIZADO: ' + updated)
        res.send({ product: updated })
    })
})

app.delete('/api/product/:productId', (req,res) => {
    let productId = req.params.productId
    
    Product.findById(productId, (err, product) => {
        if (err) {
            res.status(500).send({message: `Error al realizar peticion: ${err}`})
        }
        if (!product) {
            res.status(404).send({message: `El producto no existe`})
        }

        product.remove(err => {
            if (err) {
                res.status(500).send({message: `Error al borrar el producto: ${err}`})                
            }

            res.status(200).send({message: `El producto ha sido eliminado`})
        })
    })
})

mongoose.connect('mongodb://localhost:27017/shopRest', (err, res) => {
    if (err){
        return console.log(`Error al conectar a la bd: ${err}`)
    }

    console.log('Conexion establecida')

    //Puerto a escuchar
    app.listen(port, () => {
        console.log('API REST CORRIENDO HTTP');
    })
})

