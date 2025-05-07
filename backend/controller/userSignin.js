const userModel = require("../models/userModels")
const bycrypt = require('bcryptjs')

async function userSigninController(req, res) {
    try {
        const { email, password } = req.body
        if (!email || !password) throw new Error('Email and Password are required');

        const user = await userModel.findOne({ email })
        if (!user) throw new Error('User doesnt exist');

        const isMatch = await bycrypt.compare(password, user.password)
        if (!isMatch) throw new Error('The credentials dont match');

        res.status(200).json({
            data: user,
            message: 'Login suceessful',
            error: false,
            success: true,
        })


    } catch (error) {
        res.status(400).json({
            message: error.message || 'Sign in failed',
            error: true,
            success: false
        })
    }
}

module.exports = userSigninController