const express = require('express')
const { validatorLogin, validatorCreateUser } = require('../validators/auth')

const routes = express.Router()
const  {encrypt, compare} = require('../utils/kandlePassword')
const userSchema = require('../models/mongo/users')

const {registerUser,login}= require('../controllers/auth')
routes.post('/register', validatorCreateUser,registerUser)

routes.post('/login', validatorLogin, login)

module.exports = routes