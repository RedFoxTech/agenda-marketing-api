const mongoose = require('mongoose');
const config = require('../config/config')


mongoose.connect(`${config.MONGODB_URI}/${config.MONGODB_DATABASE}`, { useNewUrlParser: true })

mongoose.Promise = global.Promise;

module.exports = mongoose;