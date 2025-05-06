const userModel = require('../models/userModels')
const bycrypt = require('bcryptjs')

async function userSignUpController(req, res) {
    try {
        const { name, email, password } = req.body

        if (!email) throw new Error('Please provide email');
        if (!name) throw new Error('Please provide name');
        if (!password) throw new Error('Please provide password');

        const salt = bycrypt.genSaltSync(10)
        const hashedPassword = await bycrypt.hashSync(password)

        if (!hashedPassword) throw new Error('Something is wrong with the passowrd');

        const payload = {
            ...req.body,
            password: hashedPassword
        }

        const userData = new userModel(payload)
        const saveUser = userData.save()

        res.status(201).json({
            data: saveUser,
            success: true,
            error: false,
            message: 'User created successfully'
        })

    } catch (error) {
        res.json({
            message: error,
            error: true,
            success: false
        })
    }
}

module.exports = userSignUpController