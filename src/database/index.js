const mongoose = require('mongoose');
const config = require('../config/config')

module.exports = () => {
    mongoose.connect(`${config.MONGODB_URI}${config.MONGODB_DATABASE}`, {
        authSource: config.MONGODB_DATABASE,
        user: config.MONGODB_USER,
        pass: config.MONGODB_PASS,
        useNewUrlParser: true
    }).then(() => {
        console.log(config.MONGODB_DATABASE, config.MONGODB_URI);
        console.log('mongo conectado!');
    }).catch(err => {
        console.log(err)
        console.log('mongo não conectado')
    });

    return mongoose.connection;
}