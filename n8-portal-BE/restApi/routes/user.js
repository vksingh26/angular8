const express = require('express');

const userRegistrationController = require('../controllers/user/registrationController');
const userLoginController = require('../controllers/user/loginController');

const router = express.Router();
router.post('/registration', userRegistrationController.postUserRegistration);
router.post('/login', userLoginController.postUserLogin)
module.exports = router;