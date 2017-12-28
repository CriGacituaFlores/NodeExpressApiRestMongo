'use strict'

//Instanciar express
//npm i -S express
const express = require('express')
//Instanciar bodyParser
//npm i -S body-parser
const bodyParser = require('body-parser')
//sudo npm i -S express-handlebars
const hbs = require('express-handlebars')
const app = express()
const api = require('./routes/index')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
//ficheros con hbs usen hbs
app.engine('.hbs', hbs({
    defaultLayout: 'default',
    extname: '.hbs'
}))
app.set('view engine', '.hbs')

app.use('/api', api)
app.get('/login', (req, res) => {
    res.render('login')
})
app.get('/product', (req,res) => {
    res.render('product')
})


module.exports = app