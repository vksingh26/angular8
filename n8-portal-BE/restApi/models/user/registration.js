const mongoose = require('mongoose');
const Joi = require('joi');
const Schema = mongoose.Schema;

const registrationSchema = new Schema({
    username: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50,
        unique: true
    },
    email: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 255,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    confirmPassword: {
        type: String,
        required: true,
        minlength: 8
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
});


function validateUserReg(user) {
    const schema = {
        username: Joi.string().min(5).max(50).required(),
        email: Joi.string().min(8).max(255).required().email(),
        password: Joi.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[~^$;.@$!%*?#_&])[A-Za-z\d~^$;.@$!%*?#_&]{8,}$/).required().strict(),
        confirmPassword: Joi.string().valid(Joi.ref('password')).required().strict()
    };
    return Joi.validate(user, schema);
}

const UserRegistration = mongoose.model('UserRegistration', registrationSchema);
module.exports = {
    UserRegistration: UserRegistration,
    validateUserReg: validateUserReg
}