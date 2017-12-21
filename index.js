'use strict'

//Instanciar express
const express = require('express')

const app = express()

//Puerto a escuchar
app.listen(3000, () => {
    console.log('API REST CORRIENDO HTTP');
})