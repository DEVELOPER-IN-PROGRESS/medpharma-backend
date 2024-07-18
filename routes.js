const express = require('express')
const route = new express.Router();
const userController = require('./controllers/userController');
const prescriptionController = require('./controllers/presController')
const jwtMiddleware = require('./middlewares/jwtmiddleware')

//user autht
route.post('/auth/register',userController.userRegisterController)
route.post('/auth/login',userController.userLoginController)
route.post('/auth/verify',jwtMiddleware,userController.userVerifyController)

route.post('/user/prescription',jwtMiddleware,prescriptionController.addPrescriptionController)

route.get('/coldstart',userController.pollController);

module.exports = route
