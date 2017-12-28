console.log('AAAAAAAAAAAAAAAAAAAA', process.env.MONGODB)
module.exports = {
    port: process.env.PORT || 3001,
    db: process.env.MONGODB || 'mongodb://localhost:27017/shopRest',
    SECRET_TOKEN: 'miclavedetokens'
}