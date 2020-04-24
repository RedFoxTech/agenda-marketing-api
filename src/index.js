var express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');

const mongo = require('./database/index')
const mongoConnection = mongo()

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


require('./controllers/authController')(app);
require('./controllers/scheduleController')(app);
require('./controllers/categoryController')(app);

mongoConnection
    .on('error', console.log)
    .on('disconnected', mongo)


app.listen(3000);

module.exports = app;
