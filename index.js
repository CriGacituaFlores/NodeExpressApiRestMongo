'use strict'


//sudo npm i -S mongoose
const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')

//sudo npm i -D nodemon

mongoose.connect(config.db, (err, res) => {
    if (err){
        return console.log(`Error al conectar a la bd: ${err}`)
    }

    console.log('Conexion establecida')

    //Puerto a escuchar
    app.listen(config.port, () => {
        console.log('API REST CORRIENDO HTTP');
    })
})

