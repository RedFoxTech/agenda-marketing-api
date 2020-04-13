const mongoose = require('mongoose');

mongoose.connect('mongodb://root:root@mongo:27017/calendar');
mongoose.Promise = global.Promise;

module.exports = mongoose;