const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('config');
const { UserLogin, validateUserLogin } = require('../../models/user/login');
const {
    UserRegistration,
    validateUserReg
} = require('../../models/user/registration');

exports.postUserLogin = async(req, res, next) => {
    const loginPassword = req.body.password;

    const { error } = validateUserLogin(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    const user = await UserRegistration.findOne({ email: req.body.email });
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!user || !validPassword) {
        return res.status(400).send('Incorrect email or password!!!');
    } else {
        const token = jwt.sign({
            _id: user._id,
            iat: new Date().getTime()
        }, config.get('PrivateKey'), {
            expiresIn: 600000
        });
        const { email, password, loginDate } = req.body;
        const userLogin = new UserLogin({
            email: email,
            password: password,
            loginDate: loginDate,
            token: token
        });
        const salt = await bcrypt.genSalt(10);
        userLogin.password = await bcrypt.hash(userLogin.password, salt);
        await userLogin
            .save()
            .then((result) => {
                const responseData = {
                    "_id": user._id,
                    "username": user.username,
                    "email": user.email,
                }
                res.header('x-auth-token', token).status(200).send({
                    message: 'User logged in successfully!!!',
                    data: responseData,
                    isloggedIn: true
                });

            })
            .catch((err) => {
                res.send({ message: 'Sorry! Something went wrong.', isloggedIn: false });
            })
    }


}