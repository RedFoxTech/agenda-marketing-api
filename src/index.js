var express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./controllers/authController')(app);
require('./controllers/scheduleController')(app);
require('./controllers/categoryController')(app);

app.listen(3000);

module.exports = app;
