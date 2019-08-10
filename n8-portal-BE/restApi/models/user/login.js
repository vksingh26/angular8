const mongoose = require('mongoose');
const Joi = require('joi');
const Schema = mongoose.Schema;

const loginSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    loginDate: {
        type: Date,
        default: Date.now
    }
});

function validateUserLogin(user) {
    const schema = {
        email: Joi.string().min(8).max(255).required().email(),
        password: Joi.string().min(8).max(255).required().strict()
    };
    return Joi.validate(user, schema);
}
const UserLogin = mongoose.model('userLogin', loginSchema);
module.exports = {
    userLogin: UserLogin,
    validateUserLogin: validateUserLogin
}