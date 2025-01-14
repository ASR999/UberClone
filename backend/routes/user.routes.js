const express = require('express')
const router = express.Router();
const {body} = require('express-validator')
const userController = require('../controllers/user.controllers')

router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min: 3}).withMessage('First name must be 3 characters long'),
    body('password').isLength({min:6}).withMessage('Password should be atleast 3 character')
],
    userController.registerUser  
)

router.post('/login',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min:6}).withMessage('Password should be atleast 3 character')
],
    userController.loginUser   
)




module.exports = router;