const bcrypt = require('bcrypt')
const User = require('../model/User')
const ErrorHandler = require("../utils/errorHandelr");
const dotenv = require('dotenv');
const CatchAsyncError = require('../middleware/CatchAsyncError');
const sendToken = require('../utils/JwtCreate');
dotenv.config();

exports.register = CatchAsyncError(async (req, res, next) => {

    const { name, email, password, Role, phoneNo } = req.body
    let user = await User.findOne({
        email
    })
    if (user) {
        return next(new ErrorHandler("user already exist", 400));
    }
    const hashed_password = await bcrypt.hash(password, 10);

    const createuser = await User.create({
        name,
        email,
        password: hashed_password,
        Role,
        phoneNo,
    });

    sendToken(createuser, 201, res);

})


exports.login = CatchAsyncError(async (req, res, next) => {
    console.log(req.body)
    const { email, password } = req.body;
    if (!email || !password) {
        return next(new ErrorHandler("Please Enter Email & Password", 400));
    }
    const user = await User.findOne({ email })
    if (!user) {
        return next(new ErrorHandler("Invalid email or password", 401));
    }
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        return next(new ErrorHandler("Invalid email or password", 401));
    }

    sendToken(user, 200, res)

})


exports.verifyuser = CatchAsyncError(async (req, res, next) => {
    const user = await User.findById(req.user.id);

    res.status(200).json({
        success: true,
        user,
    });
});

exports.GetAllUsers = CatchAsyncError(async (req, res, next) => {
    const users = await User.find();
    res.status(200).send(users);

})
exports.GetSingleUser = CatchAsyncError(async (req, res, next) => {
    const { id } = req.user;
    const user = await User.findById(id);
    res.status(200).send(user);

})
exports.DeleteUser = CatchAsyncError(async (req, res, next) => {
    const { id } = req.params
    const users = await User.findByIdAndDelete(id);
    res.status(200).send(users);
})
//for admin
exports.UpdateUser = CatchAsyncError(async (req, res, next) => {
    const { name, email, Role, } = req.body
    const { id } = req.params;
    const users = await User.findByIdAndUpdate(
        id,
        {
            $set: {
                name,
                email,
                Role
            }
        },
        {
            new: true
        }
    )
    res.status(200).send(users);


})


//update your profile
exports.UpdateProfile = CatchAsyncError(async (req, res, next) => {
    const newUserData = {
        name: req.body.name,
        email: req.body.email,

    };
    const {
        password, name, email
    } = req.body
    let hashed_password = await bcrypt.hash(password, 10);

    const { id } = req.params;
    // console.log(req.body)
    if (req.body.avatar !== 'undefined') {
        const user = await User.findById(id);
        if (user.avatar.public_id !== undefined) {
            const imageId = user.avatar.public_id;

            await cloudinary.v2.uploader.destroy(imageId);
        }

        const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar, {
            folder: "Bike-Project",
            width: 150,
            crop: "scale",
        });

        newUserData.avatar = {
            public_id: myCloud.public_id,
            url: myCloud.secure_url,
        };
    }

    const users = await User.findByIdAndUpdate(
        id,
        newUserData,
        {
            new: true,
        }
    )
    res.status(200).send(users);


})
exports.UpdateUserPasword = CatchAsyncError(async (req, res, next) => {

    const {
        password
    } = req.body
    let hashed_password = await bcrypt.hash(password, 10);
    const { id } = req.params;
    const users = await User.findByIdAndUpdate(
        id,
        {
            $set: { password: hashed_password }
        },
        {
            new: true
        }
    )
    res.status(200).send(users);


})

