const jwt = require('jsonwebtoken');

const authConfig = require('../config/auth')

const User = require('../models/user');


function generateToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400,
    });
}
module.exports = {
    async index(req, res) {
        try {
            const users = await User.find();

            return res.send({
                users
            });
        } catch (error) {
            return res.status(400).send({
                error: 'Error loading users'
            });
        }
    },

    async create(req, res) {
        const {
            email
        } = req.body;

        try {

            if (await User.findOne({
                    email
                }))
                return res.status(400).send({
                    error: 'User already exists'
                });

            const user = await User.create(req.body);

            user.password = undefined;

            return res.send({
                user,
                token: generateToken({
                    id: user.id
                })
            })
        } catch (error) {
            console.log(error)
            return res.status(400).send({
                error: 'Registration failed'
            });
        }
    },

    async delete(req, res) {
        try {
            await User.findByIdAndRemove(req.params.userId);

            return res.send();
        } catch (error) {
            return res.status(400).send({
                error: 'Error deleting user'
            })
        }
    }

}