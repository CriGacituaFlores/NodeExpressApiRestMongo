console.log('AAAAAAAAAAAAAAAAAAAA', process.env.MONGODB)
module.exports = {
    port: process.env.PORT || 3001,
    db: 'mongodb://MONGODB:cristian123@ds151078.mlab.com:51078/heroku_frp1vnrr',
    SECRET_TOKEN: 'miclavedetokens'
}