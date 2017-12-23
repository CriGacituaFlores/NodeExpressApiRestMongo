'use strict'


//sudo npm i -S mongoose
const mongoose = require('mongoose')
const app = require('./app')
const port = process.env.PORT || 3000

//sudo npm i -D nodemon

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

