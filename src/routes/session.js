const express = require('express');
const router = express.Router();

const SessionController = require('../controllers/sessionController');

router.post('/authenticate', SessionController.create);

module.exports = app => app.use('/auth', router)