'use strict'

//sudo npm install --save jwt-simple
const jwt = require('jwt-simple')
//sudo npm install --save moment
const moment = require('moment')

const config = require('../config')

function createToken (user) {
    //lo que viaja en el servidor
    const payload = {
        sub: user._id,
        iath: moment().unix(),
        exp: moment().add(14, 'days').unix()
    }

    return jwt.encode(payload, config.SECRET_TOKEN)
}

function decodeToken (token) {
    const decoded = new Promise((resolve, reject) => {
        try {
            const payload = jwt.decode(token, config.SECRET_TOKEN)
        
            //PREGUNTA SI EL TOKEN CADUCO
            if (payload.exp <= moment().unix()) {
                reject({
                    status: 401,
                    message: 'El token ha expirado'
                })
            }

            resolve(payload.sub)
        } catch (err) {
            reject({
                status: 500,
                message: 'Invalid Token'
            })
        }
    })

    return decoded
}

module.exports = {
    createToken,
    decodeToken
}