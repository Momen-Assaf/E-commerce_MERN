const userModel = require("../models/userModels")
const bycrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

async function userSigninController(req, res) {
    try {
        const { email, password } = req.body
        if (!email || !password) throw new Error('Email and Password are required');

        const user = await userModel.findOne({ email })
        if (!user) throw new Error('User doesnt exist');

        const isMatch = await bycrypt.compare(password, user.password)
        if (!isMatch) throw new Error('The credentials dont match');

        const tokenData = {
            _id: user._id,
            email: user.email,
        }
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET_KEY, { expiresIn: 60 * 60 * 8 })
        const tokenOption = {
            httpOnly: true,
            secure: true
        }
        res.cookie('token', token, tokenOption).json({
            message: 'Login suceessful',
            data: token,
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