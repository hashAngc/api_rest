const {handlerError} = require('../utils/handleError')
const {verifyToken} = require('../utils/handleJwt')
const {userSchema} = require('../models/mongo/users')
const  authmiddleware = async (req, res, next) => {
    try{
     if(!req.headers.authorization){
         handleError(res, error, 401)
         return
     }   
        const token = req.headers.authorization.split(' ').pop()
        const dataToken = await verifyToken(token)
        if(!dataToken._id){
            handlerError(res, error, 401)
            return
        }
        const user = await userSchema.findById(dataToken._id)
        req.user = user

        next()

    }catch(error){
        handlerError(res, error)
       return
    }
}
module.exports = {authmiddleware}