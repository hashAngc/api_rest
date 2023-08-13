const {check} = require('express-validator');
const validator = require('../utils/handleValidator')


const validatorLogin = [
    check('email').isEmail().withMessage('El email es requerido'),
    check('password').isString().withMessage('La contraseña es requerida'),
]
const validatorCreateUser = [
    check('name').isString().withMessage('El nombre es requerido'),
    check('age').isNumeric().withMessage('La edad es requerida'),
    check('email').isEmail().withMessage('El email es requerido'),
    check('password').isString().withMessage('La contraseña es requerida'),
    
]

module.exports = {validatorLogin, validatorCreateUser}