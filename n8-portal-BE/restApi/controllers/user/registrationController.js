const { UserRegistration, validateUserReg } = require('../../models/user/registration');
const bcrypt = require('bcrypt');

exports.postUserRegistration = async(req, res, next) => {
    const { error } = validateUserReg(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    let userEmail = await UserRegistration.findOne({
        email: req.body.email
    });
    let userName = await UserRegistration.findOne({
        username: req.body.username
    });
    if (userName || userEmail) {
        return res.status(400).send('user already exists!');
    } else {
        const { username, email, password, confirmPassword } = req.body;
        const createdDate = req.body.createdDate;
        const userRegistration = new UserRegistration({
            username: username,
            email: email,
            password: password,
            confirmPassword: confirmPassword,
            createdDate: createdDate
        });
        const salt = await bcrypt.genSalt(10);
        userRegistration.password = await bcrypt.hash(userRegistration.password, salt);
        userRegistration.confirmPassword = await bcrypt.hash(userRegistration.confirmPassword, salt);
        await userRegistration
            .save()
            .then((result) => {
                const responseData = {
                    "_id": result._id,
                    "username": result.username,
                    "email": result.email
                }
                res.status(201).send({
                    message: 'User has been created successfully!!!',
                    data: responseData
                });
            })
            .catch((err) => {
                res.send('Sorry! Something went wrong.');
            });
    }

}