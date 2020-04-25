const UserController = require('../controllers/userController');

const express = require('express');
const router = express.Router();

router.get('/', UserController.index);
router.post('/', UserController.create);
router.delete('/:userId', UserController.delete);

module.exports = app => app.use('/user', router)