const mongoose = require('mongoose');
const config = require('../config/config')

mongoose.connect(`mongodb://${config.DB_USER}:${config.DB_PASS}@mongo:${config.DB_PORT}/${config.DB_NAME}`);
mongoose.Promise = global.Promise;

module.exports = mongoose;