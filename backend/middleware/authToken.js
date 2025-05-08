const jwt = require('jsonwebtoken')

async function authToken(req, res, next) {
    try {
        const token = req?.cookies.token
        // console.log('token: ', token)

        if (!token) {
            res.status(200).json({
                message: 'User not logged in',
                error: true,
                success: false
            })
        }
        jwt.verify(token, process.env.TOKEN_SECRET_KEY, function (error, decoded) {
            if (error) console.log('error: ', error);
            console.log('decoded:', decoded)
            req.userId = decoded?._id
            next()
        })
    } catch (error) {
        res.status(400).json({
            message: error.message || 'Failed to authinticate the token',
            data: [],
            error: true,
            success: false
        })
    }
}

module.exports = authToken