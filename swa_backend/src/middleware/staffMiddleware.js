const jwt = require('jsonwebtoken')
const User = require('../model/user')
const redisClient = require('../config/redis')
const staffMiddleware = async (req, res, next) => {
    try {
        const {token} = req.cookies
        if(!token){
            throw new Error("token is not present")
        }
        const payload = jwt.verify(token,"wsac")
        const {_id} = payload

        if(!_id){
            throw new Error("Invalid token")
        }
        const result = await User.findById(_id)

        if(!(payload.role == 'staff' || payload.role == 'admin')){
            throw new Error('Invalid Token')
        }

        if(!result){
            throw new Error("User Doen't Exit  ")
        }
        const IsBlocked = await redisClient.exists(`token:${token}`)
        if(IsBlocked){
            throw new Error("invalid Token")
        }
        req.result = result;
        next()
         
    } catch (err) {
        res.status(400).send("ERROR "+err.message)
    }
}

module.exports = staffMiddleware