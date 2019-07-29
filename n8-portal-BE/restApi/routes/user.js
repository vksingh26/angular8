const express = require('express');

const userRegistrationController = require('../controllers/registrationController');

const router = express.Router();
router.post('/user-registration', userRegistrationController.postUserRegistration);
module.exports = router;