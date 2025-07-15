const express = require('express')
const route = new express.Router();
const userController = require('./controllers/userController');

route.post('/auth/register',userController.userRegisterController)

route.post('/auth/login',userController.userLoginController)

module.exports = route
