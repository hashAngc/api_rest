const {matchedData} = require('express-validator')
const {encrypt, compare} = require('../utils/kandlePassword')
const userSchema = require('../models/mongo/users')
const {handlerError} = require('../utils/handleError')
const {signToken} = require('../utils/handleJwt')
const registerUser=async(req,res)=>{
    req = matchedData(req)
    const password = await encrypt(req.password)
    const body = {...req, password}
    const dataUser = await userSchema.create(body)
    dataUser.set('password', undefined, {strict: false})
    const data = {
        token: signToken(dataUser),
        user: dataUser,
    }
    res.send({data})
}
/**
 * se encarga de validar el usuario y la contraseña y si es correcto devuelve el token de sesion
 */
const login=async(req,res)=>{
  try{
   req=matchedData(req)
   const user = await userSchema.findOne({email:req.email}).select('password')
   console.log(user)
    if(!user){
        handlerError(res, "no se encontro el usuario", 401)
        return
    }
    const hashpasword = user.get('password')
    const isMatch = await compare(req.password, hashpasword)
  
    if(!isMatch){
        handlerError(res, "contraseña incorrecta", 401)
        return
     }
        const data = {
            token: signToken(user),
            user: user,
        }
        res.send({data})
     
  }catch(error){
    console.log(error)
    handlerError(res, "no se pudo iniciar sesion", 401)
  }

};
module.exports = {registerUser,login}