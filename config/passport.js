const passport = require('passport') 
const jwtStrategy = require('passport-jwt').Strategy
const extractJwt = require('passport-jwt').ExtractJwt
 
const User = require('../models/user')

module.exports = passport.use(
    new jwtStrategy(
        {jwtFromRequest: extractJwt.fromAuthHeaderAsBearerToken(),//extraigo token
        secretOrKey: process.env.SECRET_KEY},                     //desencripto la key
        (jwt_payload,done) => {                                   //si da okey hace lo siguiente
            //console.log(jwt_payload)
            User.findOne({_id:jwt_payload.id})                    // buscamos si coicide nuestro id
            .then(user => {
                console.log(user)
                if (user) {
                    return done(null, user)                        //null error, usuario
                }
                else if (err) {
                    console.log(err)
                    return done(err, false);
                }
                else{
                    return done(null, false) 
                }
                })
            .catch(err => {
                console.log(err)
                return done(err,false)
            })
        }
))
