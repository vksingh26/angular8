// Add Modal for update profile
// Add Modal for Change Password 
// Add Modal for Forgot Password

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userProfileSchema = new Schema({
    fullname: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    sex: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    updateDate: {
        type: Date,
        default: Date.now
    },
    token: {
        type: String,
    },
});

module.exports = mongoose.model('UserProfile', userProfileSchema);