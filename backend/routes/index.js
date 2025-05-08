const express = require('express')

const router = express.Router()

const userSignUpController = require('../controller/userSignUp')
const userSigninController = require('../controller/userSignin')
const userDetailsController = require('../controller/userDetails')
const authToken = require('../middleware/authToken')

router.post('/signup', userSignUpController)
router.post('/signin', userSigninController)
router.get('/user-details', authToken, userDetailsController)


module.exports = router