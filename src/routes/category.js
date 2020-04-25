const express = require('express');
const authMiddleware = require('../middlewares/auth');

const CategoryController = require('../controllers/categoryController');

const router = express.Router();

router.use(authMiddleware);

router.get('/', CategoryController.index);
router.post('/', CategoryController.create);
router.put('/:categoryId', CategoryController.update);
router.delete('/:categoryId', CategoryController.delete);

module.exports = app => app.use('/category', router);