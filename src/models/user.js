const {Schema, model} = require('mongoose')
const bcrypt = require('bcrypt-nodejs');

const UserSchema = new Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        require: true,
        select: false
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    passwordResetToken:{
        type: String,
        default: ''
    },
    passwordResetExpires:{
        type: String,
        default: ''
    }
});

UserSchema.pre('save', async function (next) {
    const hash = await bcrypt.hashSync(this.password);

    this.password = hash;

    next();
})


const User = model('User', UserSchema);

module.exports = User;