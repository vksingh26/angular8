const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('config');
const { userLogin, validateUserLogin } = require('../../models/user/login');
const {
    UserRegistration,
    validateUserReg
} = require('../../models/user/registration');

exports.postUserLogin = async(req, res, next) => {
    console.log("userPassword:  " + req.body.password);
    const loginPassword = req.body.password;
    
     const { error } = validateUserLogin(req.body);
     if (error) {
        return res.status(400).send(error.details[0].message);
     }
    const user = await UserRegistration.findOne({email: req.body.email});
    if (!user) {
        return res.status(400).send('Incorrect email or password.');
    }
     const validPassword = await bcrypt.compare(req.body.password, user.password);
     if (!validPassword) {
         return res.status(400).send('Incorrect email or password!!!');
     }
    const token = jwt.sign({
        _id: user._id
    }, config.get('PrivateKey'), {
    expiresIn: 900000
    });
    const responseData = {"_id": user._id, "username": user.username, "email": user.email}
    res.header('x-auth-token', token).send(responseData);
}
