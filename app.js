'use strict'

//Instanciar express
//npm i -S express
const express = require('express')
//Instanciar bodyParser
//npm i -S body-parser
const bodyParser = require('body-parser')
const app = express()
const api = require('./routes/index')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/api', api)


module.exports = app