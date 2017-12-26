'use stric'

const services = require('../services/index')

function isAuth (req, res, next) {
    if (!req.headers.authotization) {
        return res.status(403).send({ message: 'No tienes autorizacion'})
    }

    const token = req.headers.authotization.split(" ")[1]
    
    services.decodeToken(token)
        .then(response => {
            req.user = response
            next()
        })
        .catch(response => {
            res.status(response.status)
        })
}

module.exports = isAuth