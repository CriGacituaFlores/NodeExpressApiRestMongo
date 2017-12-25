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

module.exports = createToken