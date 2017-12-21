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

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())

app.get('/api/product', (req,res) => {
    res.send(200, { products: [] })
})

app.get('/api/product/:productId', (req,res) => {

})

app.post('/api/product', (req,res) => {
    console.log(req.body)
    res.status(200).send({ message: 'El producto se ha recibido'})
})

app.put('/api/product/:productId', (req,res) => {

})

app.delete('/api/product/:productId', (req,res) => {

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

