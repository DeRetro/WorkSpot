const express = require('express')

//controllers
const {signupUser, loginUser, forgotPassword, verifyOTP, resetpassword} = require('../controllers/userController')

const router = express.Router()

//login route
router.post('/login', loginUser)

 
//signup route
router.post('/signup', signupUser)

//forgot password
router.post('/forgotpassword', forgotPassword)

//verifyOTP route
router.post('/verifyotp', verifyOTP)

//resetpassword
router.post('/resetpassword', resetpassword)

module.exports = router
