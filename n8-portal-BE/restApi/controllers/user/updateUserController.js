// Add Update Profile
// Add Change Password
// Add Forgot Password
const { UserLogin, validateUserLogin } = require('../../models/user/login');
const { UserProfile } = require('../../models/user/updateUser');
exports.postUserProfile = async(req, res, next) => {
    const loggedInUser = await UserLogin.findOne({ email: req.body.email });
    const { fullname, age, sex, dob, mobile } = req.body;
    const userProfile = new UserProfile({
        fullname: fullname,
        age: age,
        sex: sex,
        dob: dob,
        mobile: mobile
    })

    if (!loggedInUser) {
        return res.status(400).send('Invalid user !!!');
    } else {
        await userProfile
            .save()
            .then((result) => {
                const responseData = {
                    "_id": userProfile._id,
                    "fullname": userProfile.fullname,
                    "age": userProfile.age,
                    "sex": userProfile.sex,
                    "dob": userProfile.dob,
                    "mobile": userProfile.mobile
                }
                res.header('x-auth-token', token).status(200).send({
                    message: 'User profile updated successfully!!!',
                    data: responseData,
                    isloggedIn: true
                });
            })
            .catch((error) => {
                res.send({ message: 'Sorry! Something went wrong.', isloggedIn: false });
            })
    }
}

exports.getUserProfile = async((req, res, next) => {})