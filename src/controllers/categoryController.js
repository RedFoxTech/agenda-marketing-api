const express = require('express');
const authMiddleware = require('../middlewares/auth');

const Category = require('../models/category');

const router = express.Router();

router.use(authMiddleware);

router.get('/', async (req, res) => {
    try {
        const categorys = await Category.find();

        return res.send({
            categorys
        });
    } catch (error) {
        return res.status(400).send({
            error: 'Error loading categorys'
        })
    }
});

router.post('/', async (req, res) => {
    try {
        const id = await Category.findOne().select('id').sort({
            $natural: -1
        });

        if (id)
            req.body.id = '' + (parseInt(id.id) + 1) + ''

        const category = await Category.create({
            ...req.body,
            user: req.userId
        });

        return res.send({
            category
        });

    } catch (error) {
        return res.status(400).send({
            error: 'Error creating new category'
        });
    }
});

router.put('/:categoryId', async (req, res) => {
    try {
        const category = await Category.findByIdAndUpdate(req.params.categoryId, {
            ...req.body
        }, {
            new: true
        });

        return res.send({
            category
        });
    } catch (error) {
        return res.status(400).send({
            error: 'Error updating category'
        });
    }
})

router.delete('/:categoryId', async (req, res) => {
    try {
        await Category.findByIdAndRemove(req.params.categoryId);

        return res.send();
    } catch (error) {
        return res.status(400).send({
            error: 'Error deleting category'
        })
    }
})

module.exports = app => app.use('/category', router);