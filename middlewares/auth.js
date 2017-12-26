'use stric'

const jwt = require('jwt-simple')
const moment = require('moment')
const config = require('../config')

function isAuth (req, res, next) {
    if (!req.headers.authotization) {
        return res.status(403).send({ message: 'No tienes autorizacion'})
    }

    const token = req.headers.authotization.split(" ")[1]
    const payload = jwt.decode(token, config.SECRET_TOKEN)

    //PREGUNTA SI EL TOKEN CADUCO
    if (payload.exp <= moment().unix()) {
        return res.status(401).send({ message: 'EL token ha expirado'})
    }

    req.user = payload.sub
    next()
}

module.exports = isAuth