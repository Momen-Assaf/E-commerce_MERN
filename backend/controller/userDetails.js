const userModel = require("../models/userModels")

async function userDetailsController(req, res) {
    try {
        console.log('user details: ', req.userId)
        const user = await userModel.findById(req.userId)
        console.log('user: ', user)

    } catch (error) {
        res.status(400).json({
            message: error.message || 'Error in getting user details',
            error: true,
            success: false
        })
    }
}

module.exports = userDetailsController