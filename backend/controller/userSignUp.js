const userModel = require('../models/userModels')
const bycrypt = require('bcryptjs')

async function userSignUpController(req, res) {
    try {
        const { name, email, password } = req.body

        const user = await userModel.findOne({email})
        
        if (user) throw new Error('User already exists');
        if (!email) throw new Error('Please provide an email');
        if (!name) throw new Error('Please provide a name');
        if (!password) throw new Error('Please provide a password');

        const salt = await bycrypt.genSalt(10)
        const hashedPassword = await bycrypt.hash(password, salt)

        if (!hashedPassword) throw new Error('Something is wrong with the passowrd');

        const payload = {
            ...req.body,
            role: 'GENERAL',
            password: hashedPassword
        }

        const userData = new userModel(payload)
        const saveUser = await userData.save()

        res.status(201).json({
            data: saveUser,
            success: true,
            error: false,
            message: 'User created successfully'
        })

    } catch (error) {
        res.status(400).json({
            message: error.message || 'Signup failed',
            error: true,
            success: false
        })
    }
}

module.exports = userSignUpController