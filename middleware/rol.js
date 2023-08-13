const handlerError = require('../utils/handleError')
const rol = (rol) => (req, res, next) => {
    try {
        const { user } = req
        const rolUser = user.rol
        const isCheck = rol.some((rolSingle) => rolUser.includes(roleSingle))
        if (!isCheck) {
            handlerError(res, 'No tienes permisos para realizar esta acción', 403)
        }
        next()
    } catch (error) {
        handlerError(error)
    }
}

module.exports = rol