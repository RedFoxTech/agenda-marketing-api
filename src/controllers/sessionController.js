const bcrypt = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');

const authConfig = require('../config/auth')

const User = require('../models/user');

function generateToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400,
    });
}

module.exports = {
    async create(req, res) {
        const {
            email,
            password
        } = req.body;
        try {
            const user = await User.findOne({
                email
            }).select('+password');


            if (!user)
                return res.status(400).send({
                    error: 'User not found'
                });

            if (!bcrypt.compareSync(password, user.password))
                return res.status(400).json({
                    msg: 'password incorrect'
                });

            user.password = undefined;

            res.send({
                user,
                token: generateToken({
                    id: user.id
                })
            });

        } catch (error) {
            console.log(error)
            res.status(400).send({
                error: 'Error authenticate'
            })
        }

    }
}