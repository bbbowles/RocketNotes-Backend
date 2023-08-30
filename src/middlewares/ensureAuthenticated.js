const {verify} = require("jsonwebtoken")
const AppError = require("../utils/AppError")
const authConfig = require("../configs/auth")


function ensureAuthenticated(request, response, next){
    const authHeader = request.headers.authorization
    const tmp = request.headers

    //console.log(`user id ${user_id}`)
    console.log("auth"+authHeader) //recebe bearer + token, faz o split para apagar o bearer

    if(!authHeader){
        throw new AppError("JWT token invalido1",401)
    }


    const [, token] = authHeader.split(" ")


    try{

        const {sub:user_id} = verify(token, authConfig.jwt.secret) //token,secret,options/callback

        //console.log(tmp2) === { iat: 1692702637, exp: 1692789037, sub: '2' }

        request.user = {id:Number(user_id)}//insere o id na request.user

        return next()

    }catch{
    
        throw new AppError("JWT token invalido",401)

    }
}
module.exports = ensureAuthenticated